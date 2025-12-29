import { COLORS } from './colors.js'
import { OPACITIES } from './constants.js'

// Generate with a list.
export function * gen (func, list) {
  for (const item of list) {
    const [name, value] = func(item)
    yield [name, `{ ${value} }`]
  }
}

// Generate colors.
export function * genc (cls, prop, colors = COLORS.entries()) {
  yield [`${cls}-inherit`, `{ ${prop}: inherit }`]
  yield [`${cls}-transparent`, `{ ${prop}: transparent }`]
  yield [`${cls}-current`, `{ ${prop}: currentColor }`]

  for (const [colorName, color] of colors) {
    yield [`${cls}-${colorName}`, `{ ${prop}: oklch(${color}) }`]

    for (const value of OPACITIES) {
      yield [`${cls}-${colorName}/${value}`, `{ ${prop}: oklch(${color} / ${value / 100}) }`]
    }
  }
}

// Generate backdrop filters from filters.
export function * backdrop (filterRules) {
  // filterRules can either be a single array or a gen() call.
  const nestedFilterRules = Array.isArray(filterRules) ? [filterRules] : filterRules

  for (const filterRule of nestedFilterRules) {
    yield filterRule // Default rule.

    const [cls, value] = filterRule
    if (typeof value === 'object') {
      // Backdrop dynamic rule.
      yield [`backdrop-${cls}`, { ...value, css: value.css.replace('filter:', 'backdrop-filter:') }]
    } else {
      // Backdrop static rule.
      yield [`backdrop-${cls}`, value.replace('filter:', 'backdrop-filter:')]
    }
  }
}
