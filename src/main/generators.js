import { COLORS } from './colors.js'
import { OPACITIES } from './constants.js'

// Generate with a list.
export function* gen(func, list) {
	for (const item of list) {
		const [name, value] = func(item)
		yield [name, `{ ${value} }`]
	}
}

// Generate colors.
export function* genc(cls, prop, colors = COLORS.entries()) {
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
export function* backdrop(filterRules) {
	// Handle gen() output. Naughty assumption that gen() will not be used for less than 3 rules.
	const filterRulesArr = filterRules.length === 2 ? [filterRules] : filterRules

	for (const filterRule of filterRulesArr) {
		yield filterRule
		const [cls, rule] = filterRule
		yield [`backdrop-${cls}`, rule.replace('filter:', 'backdrop-filter:')]
	}
}
