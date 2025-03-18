import { COLORS } from './colors.js'
import { OPACITIES, PIXEL_STEP, SIZES, SIZES_FRAC } from './constants.js'

// Generate with a list.
export function* gen(func, list) {
	for (const item of list) {
		const [name, value] = func(item)
		yield [name, `{ ${value} }`]
	}
}

// Generate sizes.
export function* gens(cls, options = {}) {
	const { prop = cls, next = '' } = options

	yield [`${cls}-auto`, `${next}{ ${prop}: auto }`]
	yield [`${cls}-full`, `${next}{ ${prop}: 100% }`]
	yield [`${cls}-min`, `${next}{ ${prop}: min-content }`]
	yield [`${cls}-max`, `${next}{ ${prop}: max-content }`]
	yield [`${cls}-fit`, `${next}{ ${prop}: fit-content }`]
	yield [`${cls}-px`, `${next}{ ${prop}: 1px }`]
	yield [`-${cls}-px`, `${next}{ ${prop}: -1px }`]
	yield [`${cls}-0.5`, `${next}{ ${prop}: 2px }`]
	yield [`-${cls}-0.5`, `${next}{ ${prop}: -2px }`]

	for (const unit of ['svh', 'lvh', 'dvh', 'svw', 'lvw', 'dvw']) {
		yield [`${cls}-${unit}`, `${next}{ ${prop}: 100${unit} }`]
	}

	for (const [s, frac] of SIZES_FRAC) {
		yield [`${cls}-${s}`, `${next}{ ${prop}: ${frac * 100}% }`]
	}

	for (const s of SIZES) {
		yield [`${cls}-${s}`, `${next}{ ${prop}: ${s * PIXEL_STEP}px }`]
		yield [`-${cls}-${s}`, `${next}{ ${prop}: -${s * PIXEL_STEP}px }`]
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
