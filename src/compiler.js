/* global CSS, CSSStyleSheet, MutationObserver */
import { COLOR_PROPS } from './colors.js'
import { HIGH_PRIORITY_RULES, OPACITIES, STATES, PSEUDO, STRING_SIZES } from './constants.js'
import { KEYFRAMES } from './keyframes.js'
import { QUERIES } from './queries.js'
import { RESET } from './reset.js'
import { UTILS } from './utils.js'

/* eslint-disable @stylistic/indent */
const PARSER = new RegExp([
  // Values
  '(?<negative>-?)?', // Minus sign
  '((?<prefix>[a-z0-9-@:]+):)?',
  '(?<util>',
    // Values
    '((?<base>[a-z-]+-)(',
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

// Global object.
export const tw = { instances: new Map(), add, extend }

function parse (cls) {
  const groups = cls.match(PARSER).groups
  const { negative, prefix, util, base, number, fraction, string, raw, custom } = groups
  const minus = negative ? '-' : ''

  let mq = ''
  let pseudo = ''
  let state = ''

  // Prefix processing.
  for (const chunk of (prefix ?? '').split(':')) {
    if (QUERIES.has(chunk)) {
      if (mq) {
        throw new Error(`Query "${chunk}" is duplicated.`)
      }

      mq = chunk
    } else if (PSEUDO.has(chunk)) {
      if (pseudo) {
        throw new Error(`Pseudo element "${chunk}" is duplicated.`)
      }

      pseudo = `::${chunk}`
    } else if (STATES.has(chunk)) {
      state += `:${chunk}`
    } else if (chunk) {
      throw new Error(`Prefix "${chunk}" is invalid.`)
    }
  }

  // Resolve actual CSS.
  let css = UTILS.get(`${minus}${util}`) // Basic class.
  if (!css) {
    css = UTILS.get(base) // Dynamic class.
    if (!css || !css.includes('$')) {
      throw new Error('Utility class does not exist.')
    }

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
      throw new Error('Utility class does not exist.')
    }
  }

  const baseRule = `.${CSS.escape(cls)}${pseudo}${state} ${css}`
  const rule = mq ? `${QUERIES.get(mq)} { ${baseRule} }` : baseRule
  const isHighPriority = Boolean(HIGH_PRIORITY_RULES.find(r => util.includes(r)))
  const hasQuery = Boolean(mq)

  return { rule, isHighPriority, hasQuery }
}

function createSheet () {
  const sheet = new CSSStyleSheet()

  for (const css of RESET) {
    sheet.insertRule(css, sheet.cssRules.length)
  }

  for (const [name, keyframes] of KEYFRAMES.entries()) {
    sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, sheet.cssRules.length)
  }

  return sheet
}

function addRule (instance, cls) {
  // Skip if empty or already present.
  if (!cls || instance.usedRules.has(cls)) {
    return
  }

  const { rule, isHighPriority, hasQuery } = parse(cls)

  // Rules are added in the following order.
  // 1. Standard rules.
  // 2. High priority standard rules.
  // 3. Media query rules.
  // 4. High priority media query rules.
  let index
  if (hasQuery) {
    index = isHighPriority ? instance.sheet.cssRules.length : instance.mqRulesStartIndex
  } else {
    index = isHighPriority ? instance.mqRulesStartIndex : 0
    instance.mqRulesStartIndex += 1
  }

  instance.usedRules.add(cls)
  instance.sheet.insertRule(rule, index)
}

function addRules (instance, className) {
  const timestamp = Date.now()
  const classes = (className || '').split(/[ ,]+/)
  const outClasses = new Set()

  for (const cls of classes) {
    // Ignore false conditional results.
    if (cls === 'false') {
      continue
    }

    try {
      addRule(instance, cls)
      outClasses.add(cls)
    } catch (err) {
      console.error(`[TWCSS] Unable to process "${cls}". ${err.message}`)
    }
  }

  instance.lastGenerationTime = Date.now() - timestamp
  return Array.from(outClasses).join(' ')
}

function processElement (instance, el) {
  const className = addRules(instance, el.getAttribute('tw'))
  el.className = className
}

export function add (className, root = document) {
  init(root)
  return addRules(tw.instances.get(root), className)
}

export function extend ({ classes = {}, colors = {}, keyframes = {}, queries = {} }) {
  // Add custom keyframes.
  Object.entries(keyframes).forEach(([name, keyframes]) => {
    tw.instances.values().forEach(instance => {
      instance.sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, instance.sheet.cssRules.length)
    })
  })

  // Generate classes for custom colors.
  COLOR_PROPS.entries().forEach(([colorClass, colorProp]) => {
    Object.entries(colors).forEach(([colorSuffix, lch]) => {
      classes[`${colorClass}-${colorSuffix}`] = `{ ${colorProp}: oklch(${lch}) }`
      OPACITIES.forEach(opacity => {
        classes[`${colorClass}-${colorSuffix}/${opacity}`] = `{ ${colorProp}: oklch(${lch} / ${opacity / 100}) }`
      })
    })
  })

  // Add custom queries.
  Object.entries(queries).forEach(([name, query]) => STATES.has(name) || PSEUDO.has(name)
   ? console.error(`[TWCSS] Custom query "${name}" is reserved.`)
   : QUERIES.set(name, query))

  // Add custom classes.
  Object.entries(classes).forEach(([name, css]) => UTILS.set(name, css))
}

function initHandler (instance) {
  // Start detecting mutations.
  instance.observer.observe(instance.root, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['tw'],
  })

  // Update existing classes and initialise existing shadow roots.
  for (const el of instance.root.querySelectorAll('*')) {
    el.shadowRoot && init(el.shadowRoot)
    el.hasAttribute('tw') && processElement(instance, el)
  }
}

async function mutationHandler (instance, mutations) {
  let clean = false
  for (const m of mutations) {
    // Attribute change.
    if (m.type === 'attributes' && m.attributeName === 'tw') {
      processElement(instance, m.target)
      continue
    }

    // New node added.
    for (const node of m.addedNodes) {
      if (node.nodeType === 1) {
        // Process node.
        node.hasAttribute('tw') && processElement(instance, node)

        // Process children.
        node.querySelectorAll('[tw]').forEach(el => processElement(instance, el))

        // Initialize new shadow root.
        node.shadowRoot && init(node.shadowRoot)
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
}

export function init (root) {
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
    observer: new MutationObserver(mutations => mutationHandler(instance, mutations))
  }

  // Add instance to the map.
  tw.instances.set(root, instance)

  // Inject style sheet to the root.
  root.adoptedStyleSheets = [instance.sheet]

  // Initialise instance.
  root.readyState === 'loading'
    ? root.addEventListener('DOMContentLoaded', () => initHandler(instance))
    : initHandler(instance)

  // Performance metrics.
  instance.initTime = Date.now() - timestamp
}
