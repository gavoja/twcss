import { COLOR_PROPS } from './colors.js'
import { HIGH_PRIORITY_RULES, OPACITIES, STATES } from './constants.js'
import { FREE_PROPS } from './free-props.js'
import { KEYFRAMES } from './keyframes.js'
import { QUERIES } from './queries.js'
import { RESET } from './reset.js'
import { UTILS } from './utils.js'

// Global object.
export const tw = { instances: new Map(), extend, parser: null }

function updateParser() {
  tw.parser = new RegExp(`((?<mq>${[...QUERIES.keys()].join('|')}):)?((?<state>${STATES.join('|')}):)?(?<util>[^\\[]+(\\[(?<value>[^\\]]+)\\])?)`)
}

function escapeClass(cls) {
  return cls.replace(/(\/|\[|\]|\.|@)/g, '\\$1')
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

// Rules are added in the following order.
// 1. Standard rules.
// 2. High priority standard rules.
// 3. Media query rules.
// 4. High priority media query rules.
function addRule(instance, cls) {
  // Skip if empty or already present.
  if (!cls || instance.usedRules.has(cls)) {
    return
  }

  const { mq, state, util, value } = cls.match(tw.parser).groups

  // Get the CSS.
  let css
  if (value) {
    const prop = FREE_PROPS.get(util.split(/-\[/)[0])
    css = prop ? `{ ${prop}: ${value} }` : null
  } else {
    css = UTILS.get(util)
  }

  if (!css) {
    console.warn(`Unknown utility class: [${cls}]`)
    return
  }

  const isHighPriority = Boolean(HIGH_PRIORITY_RULES.find(r => util.includes(r)))

  // Resolve rule and index.
  const escapedUtil = escapeClass(util)
  const utilWithState = state ? `${state}\\:${escapedUtil}:${state}` : escapedUtil
  let rule
  let index
  if (mq) {
    index = isHighPriority ? instance.sheet.cssRules.length : instance.mqRulesStartIndex
    rule = `${QUERIES.get(mq)} { .${escapeClass(mq)}\\:${utilWithState} ${css} }`
  } else {
    rule = `.${utilWithState} ${css}`
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
    if (cls) {
      addRule(instance, cls)
    }
  }

  el.className = className
  instance.lastGenerationTime = Date.now() - timestamp
}

export function extend({ classes = {}, colors = {}, keyframes = {}, queries = {} }) {
  // Add media queries.
  Object.entries(queries).forEach(([name, query]) => QUERIES.set(name, query))

  // Inject keyframes.
  Object.entries(keyframes).forEach(([name, keyframes]) => {
    tw.instances.values().forEach(instance => {
      instance.sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, instance.sheet.cssRules.length)
    })
  })

  // Add classes for new colors.
  COLOR_PROPS.entries().forEach(([colorClass, colorProp]) => {
    for (const [colorSuffix, lch] of Object.entries(colors)) {
      classes[`${colorClass}-${colorSuffix}`] = `{ ${colorProp}: oklch(${lch}) }`
      for (const opacity of OPACITIES) {
        classes[`${colorClass}-${colorSuffix}/${opacity}`] = `{ ${colorProp}: oklch(${lch} / ${opacity / 100}) }`
      }
    }
  })

  // Update utils with new classes.
  Object.entries(classes).forEach(([name, css]) => UTILS.set(name, css))

  updateParser()
}

export function init(root) {
  if (!self.tw) {
    self.tw = tw
  }

  if (tw.instances.has(root)) {
    return
  }

  updateParser()

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
          if (node.nodeType === 1) {
            processElement(instance, node)

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
  for (const el of root.querySelectorAll('[tw]')) {
    processElement(instance, el)
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

// Initialize for the document.
if (typeof self !== 'undefined') {
  init(document)
}
