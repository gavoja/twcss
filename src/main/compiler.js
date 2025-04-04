import { COLOR_PROPS } from './colors.js'
import { HIGH_PRIORITY_RULES, OPACITIES, STATES, PSEUDO, STRING_SIZES } from './constants.js'
import { KEYFRAMES } from './keyframes.js'
import { QUERIES } from './queries.js'
import { RESET } from './reset.js'
import { UTILS } from './utils.js'

// Global object.
export const tw = { instances: new Map(), extend, parser: getParser() }

function getParser() {
  // biome-ignore format: It is easier to understand with extra indentation.
  return new RegExp([
    '(?<negative>-?)?', // Minus sign.
    `((?<mq>${[...QUERIES.keys()].map(mq => mq.replace(/(\.|\\|\+|\*|\?|\^|\$|\(|\)|\[|\]|\{|\})/g, '\\$1')).join('|')}):)?`, // Media or container query.
    `((?<state>${STATES.join('|')}):)?`, // State.
    `((?<pseudo>${PSEUDO.join('|')}):)?`, // Pseudo element.
    '(?<util>',
      // Values
      '((?<base>[a-z-]+)-(',
        '(?<number>[0-9.]+)|',
        '(?<fraction>[0-9]+/[0-9]+)|',
        '(?<string>[a-z]+)|',
        '(\\[(?<raw>[^\\[]+)\\])|',
        '(\\((?<custom>--[a-z-]+)\\))',
      ')$)|',
      // Default
      '(.+)',
    ')'
  ].join(''))
}

function createSheet() {
  const sheet = new CSSStyleSheet()

  for (const css of RESET) {
    sheet.insertRule(css, sheet.cssRules.length)
  }

  for (const [name, keyframes] of KEYFRAMES.entries()) {
    sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, sheet.cssRules.length)
  }

  return sheet
}

function addRule(instance, cls) {
  // Skip if empty or already present.
  if (!cls || instance.usedRules.has(cls)) {
    return
  }

  const { negative, mq, state, pseudo, util, base, number, fraction, string, raw, custom } = cls.match(tw.parser).groups

  let css = UTILS.get(util) // Basic class.
  if (!css) {
    css = UTILS.get(base) // Dynamic class.
    if (!css || !css.includes('$')) {
      throw new Error(`[TWCSS] Unknown utility class: ${cls}`)
    }

    const minus = negative ? '-' : ''
    if (number) {
      css = css.replace('$', `calc(${minus}${number} * 4px)`)
    } else if (fraction) {
      css = css.replace('$', `calc(${minus}${fraction} * 100%)`)
    } else if (raw) {
      css = css.replace('$', raw.replace(/_/g, ' '))
    } else if (custom) {
      css = css.replace('$', `var(${custom})`)
    } else if (string && STRING_SIZES[string]) {
      css = css.replace('$', STRING_SIZES[string])
    } else {
      throw new Error(`Unknown utility class: [${cls}]`)
    }
  }

  // Rules are added in the following order.
  // 1. Standard rules.
  // 2. High priority standard rules.
  // 3. Media query rules.
  // 4. High priority media query rules.

  const isHighPriority = Boolean(HIGH_PRIORITY_RULES.find(r => util.includes(r)))
  const escapedUtil = CSS.escape(util)
  const [statePrefix, stateSuffix] = state ? [`${state}\\:`, `:${state}`] : ['', '']
  const [pseudoPrefix, pseudoSuffix] = pseudo ? [`${pseudo}\\:`, `::${pseudo}`] : ['', '']
  const fullUtil = `${statePrefix}${pseudoPrefix}${escapedUtil}${pseudoSuffix}${stateSuffix}`

  let rule
  let index
  if (mq) {
    // Wrap in media query.
    index = isHighPriority ? instance.sheet.cssRules.length : instance.mqRulesStartIndex
    rule = `${QUERIES.get(mq)} { .${CSS.escape(mq)}\\:${fullUtil} ${css} }`
  } else {
    rule = `.${fullUtil} ${css}`
    index = isHighPriority ? instance.mqRulesStartIndex : 0
    instance.mqRulesStartIndex += 1
  }

  instance.usedRules.add(cls)
  instance.sheet.insertRule(rule, index)
}

function processElement(instance, el) {
  const timestamp = Date.now()
  const className = el.getAttribute('tw')
  const classes = (className || '').split(/ +/)

  for (const cls of classes) {
    try {
      addRule(instance, cls)
    } catch (err) {
      console.warn(err.message)
    }
  }

  el.className = className
  instance.lastGenerationTime = Date.now() - timestamp
}

export function extend({ classes = {}, colors = {}, keyframes = {}, queries = {} }) {
  // Inject keyframes.
  Object.entries(keyframes).forEach(([name, keyframes]) => {
    tw.instances.values().forEach(instance => {
      instance.sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, instance.sheet.cssRules.length)
    })
  })

  // Generate classes for new colors.
  COLOR_PROPS.entries().forEach(([colorClass, colorProp]) => {
    Object.entries(colors).forEach(([colorSuffix, lch]) => {
      classes[`${colorClass}-${colorSuffix}`] = `{ ${colorProp}: oklch(${lch}) }`
      OPACITIES.forEach(opacity => {
        classes[`${colorClass}-${colorSuffix}/${opacity}`] = `{ ${colorProp}: oklch(${lch} / ${opacity / 100}) }`
      })
    })
  })

  Object.entries(queries).forEach(([name, query]) => QUERIES.set(name, query))
  Object.entries(classes).forEach(([name, css]) => UTILS.set(name, css))

  // Update parser to account for new media queries.
  tw.parser = getParser()
}

export function init(root) {
  if (!self.tw) {
    self.tw = tw
  }

  if (tw.instances.has(root)) {
    return
  }

  const timestamp = Date.now()
  const sheet = createSheet()
  const instance = {
    root,
    usedRules: new Set(),
    sheet,
    mqRulesStartIndex: sheet.cssRules.length,
    observer: new MutationObserver(async mutations => {
      let clean = false
      for (const m of mutations) {
        // Attribute change.
        if (m.type === 'attributes' && m.attributeName === 'tw') {
          processElement(instance, m.target)
          continue
        }

        for (const node of m.addedNodes) {
          console.log(node)
          if (node.nodeType === 1) {
            // Process current node.
            node.hasAttribute('tw') && processElement(instance, node)

            // Process all children.
            node.querySelectorAll('[tw]').forEach(el => {
              processElement(instance, el)
            })

            // Initialize new shadow root.
            if (node.shadowRoot) {
              init(node.shadowRoot)
            }
          }
        }

        clean ||= m.removedNodes.length
      }

      // If any nodes were removed, check if any shadow roots were disconnected.
      if (clean) {
        for (const inst of tw.instances.values()) {
          if (!inst.root.isConnected) {
            inst.observer.disconnect()
            tw.instances.delete(inst.root)
          }
        }
      }
    }),
  }

  // Add instance to the map.
  tw.instances.set(root, instance)

  // Inject style sheet to the root.
  root.adoptedStyleSheets = [instance.sheet]

  // Update existing classes.
  for (const el of root.querySelectorAll('*')) {
    if (el.shadowRoot) {
      init(el.shadowRoot)
    }

    el.hasAttribute('tw') && processElement(instance, el)
  }

  // Start observing the root.
  instance.observer.observe(root, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['tw'],
  })

  // Performance metrics.
  instance.initTime = Date.now() - timestamp
}
