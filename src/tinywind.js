/**
 * @file Fast minimalist utility-first CSS runtime inspired by Tailwind and Twind.
 * @author Michal Kochel
 */

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

export const SIZES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]
const TWELVE = SIZES.slice(1, 13)
const WIDTHS = [0, 1, 2, 4, 8]
const OPACITIES = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100]
const DURATIONS = [75, 100, 150, 200, 300, 500, 700, 1000]
const SCALES = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150]
const SKEWS = [0, 1, 2, 3, 6, 12]
const ORIGINS = ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left']
const STATES = ['hover', 'focus', 'focus-visible', 'active']
const HIGH_PRIORITY_RULES = ['col-start', 'row-start', 'hidden', '-none']
const PIXEL_STEP = 4
const ANIM_TIME = '150ms'

export const SIZES_FRAC = [
	['1/2', 1 / 2],
	['1/3', 1 / 3],
	['2/3', 2 / 3],
	['1/4', 1 / 4],
	['3/4', 3 / 4],
	['1/5', 1 / 5],
	['2/5', 2 / 5],
	['3/5', 3 / 5],
	['4/5', 4 / 5],
]

const RADII = [
	['-xs', '2px'],
	['-sm', '4px'],
	['-md', '6px'],
	['-lg', '8px'],
	['-xl', '12px'],
	['-2xl', '16px'],
	['-3xl', '24px'],
	['-full', '50%'],
	['-none', 0],
]

export const COLORS = new Map([
	['red-50', '0.971 0.013 17.38'],
	['red-100', '0.936 0.032 17.717'],
	['red-200', '0.885 0.062 18.334'],
	['red-300', '0.808 0.114 19.571'],
	['red-400', '0.704 0.191 22.216'],
	['red-500', '0.637 0.237 25.331'],
	['red-600', '0.577 0.245 27.325'],
	['red-700', '0.505 0.213 27.518'],
	['red-800', '0.444 0.177 26.899'],
	['red-900', '0.396 0.141 25.723'],
	['red-950', '0.258 0.092 26.042'],
	['orange-50', '0.98 0.016 73.684'],
	['orange-100', '0.954 0.038 75.164'],
	['orange-200', '0.901 0.076 70.697'],
	['orange-300', '0.837 0.128 66.29'],
	['orange-400', '0.75 0.183 55.934'],
	['orange-500', '0.705 0.213 47.604'],
	['orange-600', '0.646 0.222 41.116'],
	['orange-700', '0.553 0.195 38.402'],
	['orange-800', '0.47 0.157 37.304'],
	['orange-900', '0.408 0.123 38.172'],
	['orange-950', '0.266 0.079 36.259'],
	['amber-50', '0.987 0.022 95.277'],
	['amber-100', '0.962 0.059 95.617'],
	['amber-200', '0.924 0.12 95.746'],
	['amber-300', '0.879 0.169 91.605'],
	['amber-400', '0.828 0.189 84.429'],
	['amber-500', '0.769 0.188 70.08'],
	['amber-600', '0.666 0.179 58.318'],
	['amber-700', '0.555 0.163 48.998'],
	['amber-800', '0.473 0.137 46.201'],
	['amber-900', '0.414 0.112 45.904'],
	['amber-950', '0.279 0.077 45.635'],
	['yellow-50', '0.987 0.026 102.212'],
	['yellow-100', '0.973 0.071 103.193'],
	['yellow-200', '0.945 0.129 101.54'],
	['yellow-300', '0.905 0.182 98.111'],
	['yellow-400', '0.852 0.199 91.936'],
	['yellow-500', '0.795 0.184 86.047'],
	['yellow-600', '0.681 0.162 75.834'],
	['yellow-700', '0.554 0.135 66.442'],
	['yellow-800', '0.476 0.114 61.907'],
	['yellow-900', '0.421 0.095 57.708'],
	['yellow-950', '0.286 0.066 53.813'],
	['lime-50', '0.986 0.031 120.757'],
	['lime-100', '0.967 0.067 122.328'],
	['lime-200', '0.938 0.127 124.321'],
	['lime-300', '0.897 0.196 126.665'],
	['lime-400', '0.841 0.238 128.85'],
	['lime-500', '0.768 0.233 130.85'],
	['lime-600', '0.648 0.2 131.684'],
	['lime-700', '0.532 0.157 131.589'],
	['lime-800', '0.453 0.124 130.933'],
	['lime-900', '0.405 0.101 131.063'],
	['lime-950', '0.274 0.072 132.109'],
	['green-50', '0.982 0.018 155.826'],
	['green-100', '0.962 0.044 156.743'],
	['green-200', '0.925 0.084 155.995'],
	['green-300', '0.871 0.15 154.449'],
	['green-400', '0.792 0.209 151.711'],
	['green-500', '0.723 0.219 149.579'],
	['green-600', '0.627 0.194 149.214'],
	['green-700', '0.527 0.154 150.069'],
	['green-800', '0.448 0.119 151.328'],
	['green-900', '0.393 0.095 152.535'],
	['green-950', '0.266 0.065 152.934'],
	['emerald-50', '0.979 0.021 166.113'],
	['emerald-100', '0.95 0.052 163.051'],
	['emerald-200', '0.905 0.093 164.15'],
	['emerald-300', '0.845 0.143 164.978'],
	['emerald-400', '0.765 0.177 163.223'],
	['emerald-500', '0.696 0.17 162.48'],
	['emerald-600', '0.596 0.145 163.225'],
	['emerald-700', '0.508 0.118 165.612'],
	['emerald-800', '0.432 0.095 166.913'],
	['emerald-900', '0.378 0.077 168.94'],
	['emerald-950', '0.262 0.051 172.552'],
	['teal-50', '0.984 0.014 180.72'],
	['teal-100', '0.953 0.051 180.801'],
	['teal-200', '0.91 0.096 180.426'],
	['teal-300', '0.855 0.138 181.071'],
	['teal-400', '0.777 0.152 181.912'],
	['teal-500', '0.704 0.14 182.503'],
	['teal-600', '0.6 0.118 184.704'],
	['teal-700', '0.511 0.096 186.391'],
	['teal-800', '0.437 0.078 188.216'],
	['teal-900', '0.386 0.063 188.416'],
	['teal-950', '0.277 0.046 192.524'],
	['cyan-50', '0.984 0.019 200.873'],
	['cyan-100', '0.956 0.045 203.388'],
	['cyan-200', '0.917 0.08 205.041'],
	['cyan-300', '0.865 0.127 207.078'],
	['cyan-400', '0.789 0.154 211.53'],
	['cyan-500', '0.715 0.143 215.221'],
	['cyan-600', '0.609 0.126 221.723'],
	['cyan-700', '0.52 0.105 223.128'],
	['cyan-800', '0.45 0.085 224.283'],
	['cyan-900', '0.398 0.07 227.392'],
	['cyan-950', '0.302 0.056 229.695'],
	['sky-50', '0.977 0.013 236.62'],
	['sky-100', '0.951 0.026 236.824'],
	['sky-200', '0.901 0.058 230.902'],
	['sky-300', '0.828 0.111 230.318'],
	['sky-400', '0.746 0.16 232.661'],
	['sky-500', '0.685 0.169 237.323'],
	['sky-600', '0.588 0.158 241.966'],
	['sky-700', '0.5 0.134 242.749'],
	['sky-800', '0.443 0.11 240.79'],
	['sky-900', '0.391 0.09 240.876'],
	['sky-950', '0.293 0.066 243.157'],
	['blue-50', '0.97 0.014 254.604'],
	['blue-100', '0.932 0.032 255.585'],
	['blue-200', '0.882 0.059 254.128'],
	['blue-300', '0.809 0.105 251.813'],
	['blue-400', '0.707 0.165 254.624'],
	['blue-500', '0.623 0.214 259.815'],
	['blue-600', '0.546 0.245 262.881'],
	['blue-700', '0.488 0.243 264.376'],
	['blue-800', '0.424 0.199 265.638'],
	['blue-900', '0.379 0.146 265.522'],
	['blue-950', '0.282 0.091 267.935'],
	['indigo-50', '0.962 0.018 272.314'],
	['indigo-100', '0.93 0.034 272.788'],
	['indigo-200', '0.87 0.065 274.039'],
	['indigo-300', '0.785 0.115 274.713'],
	['indigo-400', '0.673 0.182 276.935'],
	['indigo-500', '0.585 0.233 277.117'],
	['indigo-600', '0.511 0.262 276.966'],
	['indigo-700', '0.457 0.24 277.023'],
	['indigo-800', '0.398 0.195 277.366'],
	['indigo-900', '0.359 0.144 278.697'],
	['indigo-950', '0.257 0.09 281.288'],
	['violet-50', '0.969 0.016 293.756'],
	['violet-100', '0.943 0.029 294.588'],
	['violet-200', '0.894 0.057 293.283'],
	['violet-300', '0.811 0.111 293.571'],
	['violet-400', '0.702 0.183 293.541'],
	['violet-500', '0.606 0.25 292.717'],
	['violet-600', '0.541 0.281 293.009'],
	['violet-700', '0.491 0.27 292.581'],
	['violet-800', '0.432 0.232 292.759'],
	['violet-900', '0.38 0.189 293.745'],
	['violet-950', '0.283 0.141 291.089'],
	['purple-50', '0.977 0.014 308.299'],
	['purple-100', '0.946 0.033 307.174'],
	['purple-200', '0.902 0.063 306.703'],
	['purple-300', '0.827 0.119 306.383'],
	['purple-400', '0.714 0.203 305.504'],
	['purple-500', '0.627 0.265 303.9'],
	['purple-600', '0.558 0.288 302.321'],
	['purple-700', '0.496 0.265 301.924'],
	['purple-800', '0.438 0.218 303.724'],
	['purple-900', '0.381 0.176 304.987'],
	['purple-950', '0.291 0.149 302.717'],
	['fuchsia-50', '0.977 0.017 320.058'],
	['fuchsia-100', '0.952 0.037 318.852'],
	['fuchsia-200', '0.903 0.076 319.62'],
	['fuchsia-300', '0.833 0.145 321.434'],
	['fuchsia-400', '0.74 0.238 322.16'],
	['fuchsia-500', '0.667 0.295 322.15'],
	['fuchsia-600', '0.591 0.293 322.896'],
	['fuchsia-700', '0.518 0.253 323.949'],
	['fuchsia-800', '0.452 0.211 324.591'],
	['fuchsia-900', '0.401 0.17 325.612'],
	['fuchsia-950', '0.293 0.136 325.661'],
	['pink-50', '0.971 0.014 343.198'],
	['pink-100', '0.948 0.028 342.258'],
	['pink-200', '0.899 0.061 343.231'],
	['pink-300', '0.823 0.12 346.018'],
	['pink-400', '0.718 0.202 349.761'],
	['pink-500', '0.656 0.241 354.308'],
	['pink-600', '0.592 0.249 0.584'],
	['pink-700', '0.525 0.223 3.958'],
	['pink-800', '0.459 0.187 3.815'],
	['pink-900', '0.408 0.153 2.432'],
	['pink-950', '0.284 0.109 3.907'],
	['rose-50', '0.969 0.015 12.422'],
	['rose-100', '0.941 0.03 12.58'],
	['rose-200', '0.892 0.058 10.001'],
	['rose-300', '0.81 0.117 11.638'],
	['rose-400', '0.712 0.194 13.428'],
	['rose-500', '0.645 0.246 16.439'],
	['rose-600', '0.586 0.253 17.585'],
	['rose-700', '0.514 0.222 16.935'],
	['rose-800', '0.455 0.188 13.697'],
	['rose-900', '0.41 0.159 10.272'],
	['rose-950', '0.271 0.105 12.094'],
	['slate-50', '0.984 0.003 247.858'],
	['slate-100', '0.968 0.007 247.896'],
	['slate-200', '0.929 0.013 255.508'],
	['slate-300', '0.869 0.022 252.894'],
	['slate-400', '0.704 0.04 256.788'],
	['slate-500', '0.554 0.046 257.417'],
	['slate-600', '0.446 0.043 257.281'],
	['slate-700', '0.372 0.044 257.287'],
	['slate-800', '0.279 0.041 260.031'],
	['slate-900', '0.208 0.042 265.755'],
	['slate-950', '0.129 0.042 264.695'],
	['gray-50', '0.985 0.002 247.839'],
	['gray-100', '0.967 0.003 264.542'],
	['gray-200', '0.928 0.006 264.531'],
	['gray-300', '0.872 0.01 258.338'],
	['gray-400', '0.707 0.022 261.325'],
	['gray-500', '0.551 0.027 264.364'],
	['gray-600', '0.446 0.03 256.802'],
	['gray-700', '0.373 0.034 259.733'],
	['gray-800', '0.278 0.033 256.848'],
	['gray-900', '0.21 0.034 264.665'],
	['gray-950', '0.13 0.028 261.692'],
	['zinc-50', '0.985 0 0'],
	['zinc-100', '0.967 0.001 286.375'],
	['zinc-200', '0.92 0.004 286.32'],
	['zinc-300', '0.871 0.006 286.286'],
	['zinc-400', '0.705 0.015 286.067'],
	['zinc-500', '0.552 0.016 285.938'],
	['zinc-600', '0.442 0.017 285.786'],
	['zinc-700', '0.37 0.013 285.805'],
	['zinc-800', '0.274 0.006 286.033'],
	['zinc-900', '0.21 0.006 285.885'],
	['zinc-950', '0.141 0.005 285.823'],
	['neutral-50', '0.985 0 0'],
	['neutral-100', '0.97 0 0'],
	['neutral-200', '0.922 0 0'],
	['neutral-300', '0.87 0 0'],
	['neutral-400', '0.708 0 0'],
	['neutral-500', '0.556 0 0'],
	['neutral-600', '0.439 0 0'],
	['neutral-700', '0.371 0 0'],
	['neutral-800', '0.269 0 0'],
	['neutral-900', '0.205 0 0'],
	['neutral-950', '0.145 0 0'],
	['stone-50', '0.985 0.001 106.423'],
	['stone-100', '0.97 0.001 106.424'],
	['stone-200', '0.923 0.003 48.717'],
	['stone-300', '0.869 0.005 56.366'],
	['stone-400', '0.709 0.01 56.259'],
	['stone-500', '0.553 0.013 58.071'],
	['stone-600', '0.444 0.011 73.639'],
	['stone-700', '0.374 0.01 67.558'],
	['stone-800', '0.268 0.007 34.298'],
	['stone-900', '0.216 0.006 56.043'],
	['stone-950', '0.147 0.004 49.25'],
	['black', '0 0 0'],
	['white', '1 0 0'],
])

export const RESET = [
	'*,*::before,*::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: currentColor; margin: 0; padding: 0 }',
	'ul,ol { list-style: none }',
	'h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit }',
	'input,button,textarea,select { font: inherit }',
	'body,html { height: 100% }',
	'img,video { max-width: 100%; height: auto }',
	'cite { font-style: normal }',
	'a { text-decoration: none; color: inherit }',
	'button { text-align: unset; background: transparent; color: inherit }',
	'body { overflow-y: scroll }',
	'svg { display: block }',
	'::placeholder { color: currentColor; opacity: 0.8 }',
	'[tw]:not([class]) { display: none }', // Prevent repaint.
]

export const COLOR_PROPS = new Map([
	['text', 'color'],
	['decoration', 'text-decoration-color'],
	['bg', 'background-color'],
	['border', 'border-color'],
	['outline', 'outline-color'],
	['accent', 'accent-color'],
	['caret', 'caret-color'],
	['fill', 'fill'],
	['stroke', 'stroke'],
])

export const FREE_PROPS = new Map([
	['top', 'top'],
	['right', 'right'],
	['bottom', 'bottom'],
	['left', 'left'],
	['start', 'inset-inline-start'],
	['end', 'inset-inline-end'],
	['basis', 'flex-basis'],
	['gap', 'gap'],
	['gap-x', 'column-gap'],
	['gap-y', 'row-gap'],
	['p', 'padding'],
	['px', 'padding-inline'],
	['py', 'padding-block'],
	['pt', 'padding-top'],
	['pr', 'padding-right'],
	['pb', 'padding-bottom'],
	['pl', 'padding-left'],
	['ps', 'padding-inline-start'],
	['pe', 'padding-inline-end'],
	['m', 'margin'],
	['mx', 'margin-inline'],
	['my', 'margin-block'],
	['mt', 'margin-top'],
	['mr', 'margin-right'],
	['ml', 'margin-left'],
	['mb', 'margin-bottom'],
	['ms', 'margin-inline-start'],
	['me', 'margin-inline-end'],
	['space-x', 'margin-inline-end'],
	['space-y', 'margin-bottom'],
	['w', 'width'],
	['min-w', 'min-width'],
	['max-w', 'max-width'],
	['h', 'height'],
	['min-h', 'min-height'],
	['max-h', 'max-height'],
	['indent', 'text-indent'],
	['border-spacing', 'border-spacing'],
	['translate-x', 'translate-x'],
	['translate-y', 'translate-y'],
	['translate-z', 'translate-z'],
	['scroll-m', 'scroll-margin'],
	['scroll-mx', 'scroll-margin-inline'],
	['scroll-my', 'scroll-margin-block'],
	['scroll-mt', 'scroll-margin-top'],
	['scroll-mr', 'scroll-margin-right'],
	['scroll-ml', 'scroll-margin-left'],
	['scroll-mb', 'scroll-margin-bottom'],
	['scroll-ms', 'scroll-margin-inline-start'],
	['scroll-me', 'scroll-margin-inline-end'],
	['scroll-p', 'scroll-padding'],
	['scroll-px', 'scroll-padding-inline'],
	['scroll-py', 'scroll-padding-block'],
	['scroll-pt', 'scroll-padding-top'],
	['scroll-pr', 'scroll-padding-right'],
	['scroll-pl', 'scroll-padding-left'],
	['scroll-pb', 'scroll-padding-bottom'],
	['scroll-ps', 'scroll-padding-inline-start'],
	['scroll-pe', 'scroll-padding-inline-end']
])

export const MEDIA_QUERIES = new Map([
	['sm', '@media screen and (max-width: 599px)'],
	['md', '@media screen and (min-width: 600px) and (max-width: 959px)'],
	['lg', '@media screen and (min-width: 960px)'],
	['light', '@media (prefers-color-scheme: light)'],
	['dark', '@media (prefers-color-scheme: dark)'],
	['@3xs', '@container (width >= 256px)'],
	['@2xs', '@container (width >= 288px)'],
	['@xs', '@container (width >= 320px)'],
	['@sm', '@container (width >= 384px)'],
	['@md', '@container (width >= 448px)'],
	['@lg', '@container (width >= 512px)'],
	['@xl', '@container (width >= 576px)'],
	['@2xl', '@container (width >= 672px)'],
	['@3xl', '@container (width >= 768px)'],
	['@4xl', '@container (width >= 896px)'],
	['@5xl', '@container (width >= 1024px)'],
	['@6xl', '@container (width >= 1152px)'],
	['@7xl', '@container (width >= 1280px)']
])

export const KEYFRAMES = new Map([
	['expand', 'from { opacity: 0; transform: translateY(-8px) } to { opacity: 1 }'],
	['toast', 'from { opacity: 0; transform: translateY(48px) } to { opacity: 1 }'],
	['fade', '0% { opacity: 0 } 100% { opacity: 1 }'],
])

const CLASS_PARSER = new RegExp(`((?<mq>[a-z@]+):)?((?<state>${STATES.join('|')}):)?(?<util>[^\\[]+(\\[(?<value>[^\\]]+)\\])?)`)

// -----------------------------------------------------------------------------
// Utility classes
// -----------------------------------------------------------------------------

export const UTILS = new Map([
	// ---------------------------------------------------------------------------
	// Layout - aspect-ratio
	['@container', '{ container-type: inline-size }'],
	['aspect-auto', '{ aspect-ratio: auto }'],
	['aspect-square', '{ aspect-ratio: 1 / 1 }'],
	['aspect-video', '{ aspect-ratio: 16 / 9 }'],
	// Layout - columns
	...gen(ii => [`columns-${ii}`, `columns: ${ii}`], [...TWELVE, 'auto']),
	// Layout - break-after
	...gen(ii => [`break-after-${ii}`, `break-after: ${ii}`], ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column']),
	// Layout - break-before
	...gen(ii => [`break-before-${ii}`, `break-after: ${ii}`], ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column']),
	// Layout - break-inside
	...gen(ii => [`break-inside-${ii}`, `break-inside: ${ii}`], ['auto', 'avoid', 'avoid-page', 'avoid-column']),
	// Layout - box-decoration-break
	...gen(ii => [`box-decoration-${ii}`, `box-decoration-break: ${ii}`], ['clone', 'slice']),
	// Layout - box-sizing
	...gen(ii => [`box-${ii}`, `box-sizing: ${ii}-box`], ['border', 'content']),
	// Layout - display
	...gen(ii => [`${ii}`, `display: ${ii}`], ['inline', 'block', 'inline-block', 'flow-root', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents', 'table', 'inline-table', 'list-item']),
	['hidden', '{ display: none }'],
	['sr-only', '{ position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0 }'],
	['not-sr-only', '{ position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal }'],
	// Layout - float
	...gen(ii => [`float-${ii}`, `float: inline-${ii}`], ['start', 'end']),
	...gen(ii => [`float-${ii}`, `float: ${ii}`], ['left', 'right', 'none']),
	// Layout - clear
	...gen(ii => [`clear-${ii}`, `clear: inline-${ii}`], ['start', 'end']),
	...gen(ii => [`clear-${ii}`, `clear: ${ii}`], ['left', 'right', 'both', 'none']),
	// Layout - isolation
	['isolate', '{ isolation: isolate }'],
	['isolation-auto', '{ isolation: auto }'],
	// Layout - object-fit
	...gen(ii => [`object-${ii}`, `object-fit: ${ii}`], ['contain', 'cover', 'fill', 'none', 'scale-down']),
	// Layout - object-position
	...gen(ii => [`object-${ii.replace(/ /g, '-')}`, `object-position: ${ii}`], ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top']),
	// Layout - overflow
	...gen(ii => [`overflow-${ii}`, `overflow: ${ii}`], ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']),
	...gen(ii => [`overflow-x-${ii}`, `overflow-x: ${ii}`], ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']),
	...gen(ii => [`overflow-y-${ii}`, `overflow-y: ${ii}`], ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']),
	// Layout - overscroll-behavior
	...gen(ii => [`overscroll-${ii}`, `overscroll-behavior: ${ii}`], ['auto', 'contain', 'none']),
	...gen(ii => [`overscroll-x-${ii}`, `overscroll-behavior-x: ${ii}`], ['auto', 'contain', 'none']),
	...gen(ii => [`overscroll-y-${ii}`, `overscroll-behavior-y: ${ii}`], ['auto', 'contain', 'none']),
	// Layout - position
	...gen(ii => [`${ii}`, `position: ${ii}`], ['static', 'fixed', 'absolute', 'relative', 'sticky']),
	// Layout - top / right / bottom / left
	...gens('top'),
	...gens('right'),
	...gens('bottom'),
	...gens('left'),
	...gens('start', { prop: 'inset-inline-start' }),
	...gens('end', { prop: 'inset-inline-end' }),
	// Layout - visibility
	['visible', '{ visibility: visible }'],
	['invisible', '{ visibility: hidden }'],
	['collapse', '{ visibility: collapse }'],
	// Layout - z-index
	...gen(ii => [`z-${ii}`, `z-index: ${ii}`], [0, 10, 20, 30, 40, 50, 'auto']),
	// ---------------------------------------------------------------------------
	// Flexbox & Grid - flex-basis
	...gens('basis', { prop: 'flex-basis' }),
	// Flexbox & Grid - flex-direction
	['flex-row', '{ flex-direction: row }'],
	['flex-row-reverse', '{ flex-direction: row-reverse }'],
	['flex-col', '{ flex-direction: column }'],
	['flex-col-reverse', '{ flex-direction: column-reverse }'],
	// Flexbox & Grid - flex-wrap
	...gen(ii => [`flex-${ii}`, `flex-wrap: ${ii}`], ['nowrap', 'wrap', 'wrap-reverse']),
	// Flexbox & Grid - flex
	['flex-1', '{ flex: 1 1 0% }'],
	['flex-auto', '{ flex: 1 1 auto }'],
	['flex-initial', '{ flex: 0 1 auto }'],
	['flex-none', '{ flex: none }'],
	// Flexbox & Grid - flex-grow
	['grow', '{ flex-grow: 1 }'],
	['grow-0', '{ flex-grow: 0 }'],
	// Flexbox & Grid - flex-shrink
	['shrink', '{ flex-shrink: 1 }'],
	['shrink-0', '{ flex-shrink: 0 }'],
	// Flexbox & Grid - order
	...gen(ii => [`order-${ii}`, `columns: ${ii}`], TWELVE),
	['order-first', '{ order: -9999 }'],
	['order-last', '{ order: 9999 }'],
	['order-none', '{ order: 0 }'],
	// Flexbox & Grid - grid-template-columns
	...gen(ii => [`grid-cols-${ii}`, `grid-template-columns: repeat(${ii}, minmax(0, 1fr))`], TWELVE),
	['grid-cols-none', '{ grid-template-columns: none }'],
	['grid-cols-subgrid', '{ grid-template-columns: subgrid }'],
	// Flexbox & Grid - grid-column
	['col-auto', '{ grid-column: auto }'],
	...gen(ii => [`col-span-${ii}`, `grid-column: span ${ii} / span ${ii}`], TWELVE),
	['col-span-full', '{ grid-column: 1 / -1 }'],
	['col-start-auto', '{ grid-column-start: auto }'],
	...gen(ii => [`col-start-${ii}`, `grid-column-start: ${ii}`], [...TWELVE, 13]),
	// Flexbox & Grid - grid-template-rows
	...gen(ii => [`grid-rows-${ii}`, `grid-template-rows: repeat(${ii}, auto)`], TWELVE),
	['grid-rows-none', '{ grid-template-rows: none }'],
	['grid-rows-subgrid', '{ grid-template-rows: subgrid }'],
	// Flexbox & Grid - grid-row
	['row-auto', '{ grid-row: auto }'],
	...gen(ii => [`row-span-${ii}`, `grid-row: span ${ii} / span ${ii}`], TWELVE),
	['row-span-full', '{ grid-row: 1 / -1 }'],
	['row-start-auto', '{ grid-row-start: auto }'],
	...gen(ii => [`row-start-${ii}`, `grid-row-start: ${ii}`], [...TWELVE, 13]),
	// Flexbox & Grid - grid-auto-flow
	['grid-flow-row', '{ grid-auto-flow: row }'],
	['grid-flow-col', '{ grid-auto-flow: column }'],
	['grid-flow-dense', '{ grid-auto-flow: dense }'],
	['grid-flow-row-dense', '{ grid-auto-flow: row dense }'],
	['grid-flow-col-dense', '{ grid-auto-flow: column dense }'],
	// Flexbox & Grid - grid-auto-columns
	['auto-cols-auto', '{ grid-auto-columns: auto }'],
	['auto-cols-min', '{ grid-auto-columns: min-content }'],
	['auto-cols-max', '{ grid-auto-columns: max-content }'],
	['auto-cols-fr', '{ grid-auto-columns: minmax(0, 1fr) }'],
	// Flexbox & Grid - grid-auto-rows
	['auto-rows-auto', '{ grid-auto-rows: auto }'],
	['auto-rows-min', '{ grid-auto-rows: min-content }'],
	['auto-rows-max', '{ grid-auto-rows: max-content }'],
	['auto-rows-fr', '{ grid-auto-rows: minmax(0, 1fr) }'],
	// Flexbox & Grid - gap
	...gens('gap'),
	['gap-px', '{ gap: 1px }'],
	...gens('gap-x', { prop: 'column-gap' }),
	['gap-x-px', '{ column-gap: 1px }'],
	...gens('gap-y', { prop: 'row-gap' }),
	['gap-y-px', '{ row-gap: 1px }'],
	// Flexbox & Grid - justify-content
	['justify-start', '{ justify-content: flex-start }'],
	['justify-end', '{ justify-content: flex-end }'],
	['justify-center', '{ justify-content: center }'],
	['justify-between', '{ justify-content: space-between }'],
	['justify-around', '{ justify-content: space-around }'],
	['justify-evenly', '{ justify-content: space-evenly }'],
	['justify-stretch', '{ justify-content: stretch }'],
	['justify-baseline', '{ justify-content: baseline }'],
	['justify-normal', '{ justify-content: normal }'],
	// Flexbox & Grid - justify-items
	...gen(ii => [`justify-items-${ii}`, `justify-items: ${ii}`], ['start', 'end', 'center', 'stretch', 'normal']),
	// Flexbox & Grid - justify-self
	...gen(ii => [`justify-self-${ii}`, `justify-self: ${ii}`], ['auto', 'start', 'end', 'center', 'stretch']),
	// Flexbox & Grid - align-content
	['content-normal', '{ align-content: normal }'],
	['content-center', '{ align-content: center }'],
	['content-start', '{ align-content: flex-start }'],
	['content-end', '{ align-content: flex-end }'],
	['content-between', '{ align-content: space-between }'],
	['content-around', '{ align-content: space-around }'],
	['content-evenly', '{ align-content: space-evenly }'],
	['content-baseline', '{ align-content: baseline }'],
	['content-stretch', '{ align-content: stretch }'],
	// Flexbox & Grid - align-items
	['items-start', '{ align-items: flex-start }'],
	['items-end', '{ align-items: flex-end }'],
	['items-center', '{ align-items: center }'],
	['items-baseline', '{ align-items: baseline }'],
	['items-stretch', '{ align-items: stretch }'],
	// Flexbox & Grid - align-self
	['self-auto', '{ align-self: auto }'],
	['self-start', '{ align-self: flex-start }'],
	['self-end', '{ align-self: flex-end }'],
	['self-center', '{ align-self: center }'],
	['self-stretch', '{ align-self: stretch }'],
	['self-baseline', '{ align-self: baseline }'],
	// Flexbox & Grid - place-content
	['place-content-center', '{ place-content: center }'],
	['place-content-start', '{ place-content: flex-start }'],
	['place-content-end', '{ place-content: flex-end }'],
	['place-content-between', '{ place-content: space-between }'],
	['place-content-around', '{ place-content: space-around }'],
	['place-content-evenly', '{ place-content: space-evenly }'],
	['place-content-baseline', '{ place-content: baseline }'],
	['place-content-stretch', '{ place-content: stretch }'],
	// Flexbox & Grid - place-items
	...gen(ii => [`place-items-${ii}`, `place-items: ${ii}`], ['start', 'end', 'center', 'baseline', 'stretch']),
	// Flexbox & Grid - place-self
	...gen(ii => [`place-self-${ii}`, `place-self: ${ii}`], ['auto', 'start', 'end', 'center', 'stretch']),
	// ---------------------------------------------------------------------------
	// Spacing - padding
	...gens('p', { prop: 'padding' }),
	...gens('px', { prop: 'padding-inline' }),
	...gens('py', { prop: 'padding-block' }),
	...gens('pt', { prop: 'padding-top' }),
	...gens('pr', { prop: 'padding-right' }),
	...gens('pb', { prop: 'padding-bottom' }),
	...gens('pl', { prop: 'padding-left' }),
	...gens('ps', { prop: 'padding-inline-start' }),
	...gens('pe', { prop: 'padding-inline-end' }),
	// Spacing - margin
	...gens('m', { prop: 'margin' }),
	...gens('mx', { prop: 'margin-inline' }),
	...gens('my', { prop: 'margin-block' }),
	...gens('mt', { prop: 'margin-top' }),
	...gens('mr', { prop: 'margin-right' }),
	...gens('ml', { prop: 'margin-left' }),
	...gens('mb', { prop: 'margin-bottom' }),
	...gens('ms', { prop: 'margin-inline-start' }),
	...gens('me', { prop: 'margin-inline-end' }),
	...gens('space-x', { prop: 'margin-inline-end', next: '> :not(:last-child) ' }),
	...gens('space-y', { prop: 'margin-bottom', next: '> :not(:last-child) ' }),
	// Sizing - width
	...gens('w', { prop: 'width' }),
	// Sizing - min-width
	...gens('min-w', { prop: 'min-width' }),
	// Sizing - max-width
	...gens('max-w', { prop: 'max-width' }),
	// Sizing - height
	...gens('h', { prop: 'height' }),
	// Sizing - min-height
	...gens('min-h', { prop: 'min-height' }),
	// Sizing - max-height
	...gens('max-h', { prop: 'max-height' }),
	// ---------------------------------------------------------------------------
	// Typography - font-family
	['font-sans', '{ font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" }'],
	['font-serif', '{ font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif }'],
	['font-mono', '{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace }'],
	// Typography - font-size
	['text-xs', '{ font-size: 12px; line-height: 1.333 }'],
	['text-sm', '{ font-size: 14px; line-height: 1.429 }'],
	['text-base', '{ font-size: 16px; line-height: 1.5 }'],
	['text-lg', '{ font-size: 18px; line-height: 1.555 }'],
	['text-xl', '{ font-size: 20px; line-height: 1.4 }'],
	['text-2xl', '{ font-size: 24px; line-height: 1.333 }'],
	['text-3xl', '{ font-size: 30px; line-height: 1.2 }'],
	['text-4xl', '{ font-size: 36px; line-height: 1.111 }'],
	['text-5xl', '{ font-size: 48px; line-height: 1 }'],
	['text-6xl', '{ font-size: 60px; line-height: 1 }'],
	['text-7xl', '{ font-size: 72px; line-height: 1 }'],
	['text-8xl', '{ font-size: 96px; line-height: 1 }'],
	['text-9xl', '{ font-size: 128px; line-height: 1 }'],
	// Typography - font-smoothing
	['antialiased', '{ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale }'],
	['subpixel-antialiased', '{ -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto }'],
	// Typography - font-style
	['italic', '{ font-style: italic }'],
	['not-italic', '{ font-style: normal }'],
	// Typography - font-weight
	['font-thin', '{ font-weight: 100 }'],
	['font-extralight', '{ font-weight: 200 }'],
	['font-light', '{ font-weight: 300 }'],
	['font-normal', '{ font-weight: 400 }'],
	['font-medium', '{ font-weight: 500 }'],
	['font-semibold', '{ font-weight: 600 }'],
	['font-bold', '{ font-weight: 700 }'],
	['font-extrabold', '{ font-weight: 800 }'],
	['font-black', '{ font-weight: 900 }'],
	// Tpyography - font-stretch
	...gen(ii => [`font-stretch-${ii}`, `font-stretch: ${ii}`], ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded']),
	// Typography - font-variant-numeric
	['normal-nums', '{ font-variant-numeric: normal }'],
	...gen(ii => [ii, `font-variant-numeric: ${ii}`], ['ordinal', 'slashed-zero', 'lining-nums', 'oldstyle-nums', 'proportional-nums', 'tabular-nums', 'diagonal-fractions', 'stacked-fractions']),
	// Typography - letter-spacing
	['tracking-tighter', '{ letter-spacing: -0.05em }'],
	['tracking-tight', '{ letter-spacing: -0.025em }'],
	['tracking-normal', '{ letter-spacing: 0 }'],
	['tracking-wide', '{ letter-spacing: 0.025em }'],
	['tracking-wider', '{ letter-spacing: 0.05em }'],
	['tracking-widest', '{ letter-spacing: 0.1em }'],
	// Typography - line-clamp
	...gen(ii => [`line-clamp-${ii}`, `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${ii}`], [1, 2, 3, 4, 5, 6, 'none']),
	// Typography - line-height
	['leading-none', '{ line-height: 1 }'],
	['leading-tight', '{ line-height: 1.25 }'],
	['leading-snug', '{ line-height: 1.375 }'],
	['leading-normal', '{ line-height: 1.5 }'],
	['leading-relaxed', '{ line-height: 1.625 }'],
	['leading-loose', '{ line-height: 2 }'],
	// Typography - list-style
	['list-image-none', '{ list-style-image: none }'],
	['list-inside', '{ list-style-position: inside }'],
	['list-outside', '{ list-style-position: outside }'],
	['list-disc', '{ list-style-type: disc }'],
	['list-decimal', '{ list-style-type: decimal }'],
	['list-none', '{ list-style-type: none }'],
	// Typography - text-align
	...gen(ii => [`text-${ii}`, `text-align: ${ii}`], ['left', 'center', 'right', 'justify', 'start', 'end']),
	// Typography - text-color
	...genc('text', 'color'),
	// Typography - text-decoration
	...gen(ii => [ii, `text-decoration: ${ii}`], ['underline', 'overline', 'line-through']),
	['no-underline', '{ text-decoration: none }'],
	// Typography - text-decoration-color
	...genc('decoration', 'text-decoration-color'),
	// Typography = text-decoration-style
	...gen(ii => [`decoration-${ii}`, `text-decoration-style: ${ii}`], ['solid', 'double', 'dotted', 'dashed', 'wavy']),
	// Typography - text-decoration-thickness
	['decoration-auto', '{ text-decoration-thickness: auto }'],
	['decoration-from-font', '{ text-decoration-thickness: from-font }'],
	...gen(ii => [`decoration-${ii}`, `text-decoration-thickness: ${ii}px`], WIDTHS),
	// Typography - text-underline-offset
	['underline-offset-auto', '{ text-underline-offset: auto }'],
	...gen(ii => [`underline-offset-${ii}`, `text-underline-offset: ${ii}px`], WIDTHS),
	// Typography - text-transform
	...gen(ii => [`${ii}`, `text-transform: ${ii}`], ['uppercase', 'lowercase', 'capitalize']),
	['normal-case', '{ text-transform: none }'],
	// Typography - text-overflow
	['truncate', '{ overflow: hidden; text-overflow: ellipsis; white-space: nowrap }'],
	['overflow-ellipsis', '{ text-overflow: ellipsis }'],
	['overflow-clip', '{ text-overflow: clip }'],
	// Typography - text-wrap
	...gen(ii => [`text-${ii}`, `text-wrap: ${ii}`], ['wrap', 'nowrap', 'balance', 'pretty']),
	// Typography - text-indent
	...gens('indent', { prop: 'text-indent' }),
	// Typography - vertical-align
	...gen(ii => [`align-${ii}`, `vertical-align: ${ii}`], ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super']),
	// Typography - white-space
	...gen(ii => [`whitespace-${ii}`, `white-space: ${ii}`], ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']),
	// Typography - word-break
	['break-normal', '{ overflow-wrap: normal; word-break: normal }'],
	['break-words', '{ overflow-wrap: break-word }'],
	['break-all', '{ word-break: break-all }'],
	['break-keep', '{ word-break: keep-all }'],
	// Typography - hyphens
	...gen(ii => [`hyphens-${ii}`, `hyphens: ${ii}`], ['none', 'manual', 'auto']),
	// Typography - content - currently unsupported
	// ---------------------------------------------------------------------------
	// Backgrounds - background-attachment
	...gen(ii => [`bg-${ii}`, `background-attachment: ${ii}`], ['fixed', 'local', 'scroll']),
	// Backgrounds - background-clip
	...gen(ii => [`bg-clip-${ii}`, `background-clip: ${ii}-box`], ['border', 'padding', 'content']),
	['bg-clip-text', '{ background-clip: text }'],
	// Backgrounds - background-color'
	...genc('bg', 'background-color'),
	// Backgrounds - background-image - currently unsupported
	// Backgrounds - background-origin
	...gen(ii => [`bg-${ii}`, `background-origin: ${ii}`], ['border-box', 'padding-box', 'content-box']),
	// Backgrounds - background-position
	...gen(ii => [`bg-${ii.replace(' ', '-')}`, `background-position: ${ii}`], ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top']),
	// Backgrounds - background-repeat
	...gen(ii => [`bg-${ii}`, `background-repeat: ${ii}`], ['repeat', 'repeat-x', 'repeat-y', 'space', 'round', 'no-repeat']),
	// Backgrounds - background-size
	...gen(ii => [`bg-${ii}`, `background-size: ${ii}`], ['auto', 'cover', 'contain']),
	// // ---------------------------------------------------------------------------
	// Borders - border-radius
	...gen(([name, value]) => [`rounded${name}`, `border-radius: ${value}`], RADII),
	...gen(([name, value]) => [`rounded-tl${name}`, `border-top-left-radius: ${value}`], RADII),
	...gen(([name, value]) => [`rounded-tr${name}`, `border-top-right-radius: ${value}`], RADII),
	...gen(([name, value]) => [`rounded-bl${name}`, `border-bottom-left-radius: ${value}`], RADII),
	...gen(([name, value]) => [`rounded-br${name}`, `border-bottom-right-radius: ${value}`], RADII),
	// Borders - border-width
	['border', '{ border-width: 1px }'],
	...gen(ii => [`border-${ii}`, `border-width: ${ii}px`], WIDTHS),
	['border-t', '{ border-top-width: 1px }'],
	...gen(ii => [`border-t-${ii}`, `border-top-width: ${ii}px`], WIDTHS),
	['border-b', '{ border-bottom-width: 1px }'],
	...gen(ii => [`border-b-${ii}`, `border-bottom-width: ${ii}px`], WIDTHS),
	['border-l', '{ border-left-width: 1px }'],
	...gen(ii => [`border-l-${ii}`, `border-left-width: ${ii}px`], WIDTHS),
	['border-r', '{ border-right-width: 1px }'],
	...gen(ii => [`border-r-${ii}`, `border-right-width: ${ii}px`], WIDTHS),
	['border-s', '{ border-inline-start-width: 1px }'],
	...gen(ii => [`border-s-${ii}`, `border-inline-start-width: ${ii}px`], WIDTHS),
	['border-e', '{ border-inline-end-width: 1px }'],
	...gen(ii => [`border-e-${ii}`, `border-inline-end-width: ${ii}px`], WIDTHS),
	// Borders - border-color
	...genc('border', 'border-color'),
	// Borders - Border-style
	...gen(ii => [`border-${ii}`, `border-style: ${ii}`], ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none']),
	// Borders - outline-width
	...gen(ii => [`outline-${ii}`, `outline-width: ${ii}px`], WIDTHS),
	// Borders - outline-color
	...genc('outline', 'outline-color'),
	// Borders - outline-style
	['outline', '{ outline-style: solid }'],
	...gen(ii => [`outline-${ii}`, `outline-style: ${ii}`], ['none', 'dashed', 'dotted', 'double']),
	// Borders - outline-offset
	...gen(ii => [`outline-offset-${ii}`, `outline-offset: ${ii}px`], WIDTHS),
	// ---------------------------------------------------------------------------
	// Effects - box-shadow
	['shadow', '{ box-shadow: 0 1px rgb(0 0 0 / 0.05) }'], // Customised.
	['shadow-2xs', '{ box-shadow: 0 1px rgb(0 0 0 / 0.05) }'],
	['shadow-xs', '{ box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) }'],
	['shadow-sm', '{ box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) }'],
	['shadow-md', '{ box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) }'],
	['shadow-lg', '{ box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) }'],
	['shadow-xl', '{ box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) }'],
	['shadow-2xl', '{ box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) }'],
	['shadow-none', '{ box-shadow: 0 0 #0000 }'],
	// Effects - opacity
	...gen(ii => [`opacity-${ii}`, `opacity: ${ii / 100}`], OPACITIES),
	// Effects - mix-blend-mode - currently unsupported
	// Effects - background-blend-mode - currently unsupported
	// ---------------------------------------------------------------------------
	// Filters - blur
	...backdrop(['blur-xs', '{ filter: blur(4px) }']),
	...backdrop(['blur-sm', '{ filter: blur(8px) }']),
	...backdrop(['blur-md', '{ filter: blur(12px) }']),
	...backdrop(['blur-lg', '{ filter: blur(16px) }']),
	...backdrop(['blur-xl', '{ filter: blur(24px) }']),
	...backdrop(['blur-2xl', '{ filter: blur(40px) }']),
	...backdrop(['blur-3xl', '{ filter: blur(64px) }']),
	...backdrop(['blur-none', '{ filter: none }']),
	// Filters - brightness
	...backdrop(gen(ii => [`brightness-${ii}`, `filter: brightness(${ii}%)`], [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200])),
	// Filters - contrast - unsupported
	...backdrop(gen(ii => [`contrast-${ii}`, `filter: contrast(${ii}%)`], [0, 50, 75, 100, 125, 150, 200])),
	// Filters - drop-shadow
	...backdrop(['drop-shadow-xs', '{ filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }']),
	...backdrop(['drop-shadow-sm', '{ filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }']),
	...backdrop(['drop-shadow-md', '{ filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }']),
	...backdrop(['drop-shadow-lg', '{ filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }']),
	...backdrop(['drop-shadow-xl', '{ filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }']),
	...backdrop(['drop-shadow-2xl', '{ filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }']),
	...backdrop(['drop-shadow-none', '{ filter: drop-shadow(0 0 #0000) }']),
	// Filters - grayscale
	...backdrop(['grayscale', '{ filter: grayscale(100%) }']),
	...backdrop(['grayscale-0', '{ filter: grayscale(0) }']),
	// Filters - hue-rotate
	...backdrop(gen(ii => [`hue-rotate-${ii}`, `filter: hue-rotate(${ii}deg)`], [0, 15, 30, 60, 90, 180])),
	...backdrop(gen(ii => [`-hue-rotate-${ii}`, `filter: hue-rotate(-${ii}deg)`], [0, 15, 30, 60, 90, 180])),
	// Filters - invert - unsupported
	...backdrop(['invert', '{ filter: invert(100%) }']),
	...backdrop(['invert-0', '{ filter: invert(0) }']),
	// Filters - saturate
	...gen(ii => [`saturate-${ii}`, `filter: saturate(${ii}%)`], [0, 50, 75, 100, 150, 200]),
	// Filters - sepia
	...backdrop(['invert', '{ filter: sepia(100%) }']),
	...backdrop(['invert-0', '{ filter: sepia(0) }']),
	// Filters
	...backdrop(['filter-none', '{ filter: none }']),
	// ---------------------------------------------------------------------------
	// Tables - border-collapse
	['border-collapse', '{ border-collapse: collapse }'],
	['border-separate', '{ order-collapse: separate }'],
	// Tables - border-spacing
	...gens('border-spacing', { prop: 'border-spacing' }),
	// Tables - table-layout
	['table-auto', '{ table-layout: auto }'],
	['table-fixed', '{ table-layout: fixed }'],
	// Tables - caption-side
	['caption-top', '{ caption-side: top }'],
	['caption-bottom', '{ caption-side: bottom }'],
	// ---------------------------------------------------------------------------
	// Transitions & Animations - transition-property
	['transition', `{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-duration: ${ANIM_TIME} }`],
	['transition-all', `{ transition-property: all; transition-duration: ${ANIM_TIME} }`],
	['transition-colors', `{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: ${ANIM_TIME} }`],
	['transition-opacity', `{ transition-property: opacity; transition-duration: ${ANIM_TIME} }`],
	['transition-shadow', `{ transition-property: box-shadow; transition-duration: ${ANIM_TIME} }`],
	['transition-transform', `{ transition-property: transform; transition-duration: ${ANIM_TIME} }`],
	['transition-none', '{ transition-property: none }'],
	// Transitions & Animations - transition-behavior
	['transition-normal', '{ transition-behavior: normal }'],
	['transition-discrete', '{ transition-behavior: allow-discrete }'],
	// Transitions & Animations - transition-duration
	['duration-initial', '{ transition-duration: initial }'],
	...gen(ii => [`duration-${ii}`, `transition-duration: ${ii}ms`], DURATIONS),
	// Transitions & Animations - transition-timing-function - unsupported
	['ease-linear', '{ transition-timing-function: linear }'],
	['ease-in', '{ transition-timing-function: ease-in }'],
	['ease-out', '{ transition-timing-function: ease-out }'],
	['ease-in-out', '{ transition-timing-function: ease-in-out }'],
	['ease-initial', '{ transition-timing-function: initial }'],
	// Transitions & Animations - transition-delay
	...gen(ii => [`delay-${ii}`, `transition-delay: ${ii}ms`], DURATIONS),
	// Transitions & Animations - animation
	['animate-expand', `{ animate: expand ${ANIM_TIME} ease-out }`],
	['animate-toast', `{ animate: toast ${ANIM_TIME} ease-out }`],
	['animate-fade', `{ animate: fade ${ANIM_TIME} ease-out }`],
	// ---------------------------------------------------------------------------
	// Transforms - blackface-visibility
	['blackface-visible', '{ backface-visibility: visible }'],
	['blackface-hidden', '{ backface-visibility: hidden }'],
	// Transforms - perspective
	['perspective-dramatic', '{ perspective: 100px }'],
	['perspective-near', '{ perspective: 300px }'],
	['perspective-normal', '{ perspective: 500px }'],
	['perspective-midrange', '{ perspective: 800px }'],
	['perspective-distant', '{ perspective: 1200px }'],
	['perspective-none', '{ perspective: none }'],
	// Transforms - perspective-origin
	...gen(ii => [`perspective-origin-${ii}`, `perspective-origin: ${ii}`], ORIGINS),
	// Transforms - rotate
	...gen(ii => [`rotate-${ii}`, `rotate: ${ii}deg`], [90, 180, 270]),
	// Transforms - scale
	...gen(ii => [`scale-${ii}`, `transform: scale(${ii / 100})`], SCALES),
	...gen(ii => [`scale-x-${ii}`, `transform: scaleX(${ii / 100})`], SCALES),
	...gen(ii => [`scale-y-${ii}`, `transform: scaleY(${ii / 100})`], SCALES),
	// Transforms - skew
	...gen(ii => [`skew-x-${ii}`, `transform: skewX(${ii}deg)`], SKEWS),
	...gen(ii => [`skew-y-${ii}`, `transform: skewY(${ii}deg)`], SKEWS),
	// Transforms - transform-origin
	...gen(ii => [`origin-${ii}`, `transform-origin: ${ii}`], ORIGINS),
	// Transforms - transform-style
	['transform-3d', '{ transform-style: preserve-3d }'],
	['transform-flat', '{ transform-style: flat }'],
	// Transforms - translate
	...gens('translate-x', { prop: 'translate-x' }),
	...gens('translate-y', { prop: 'translate-y' }),
	...gens('translate-z', { prop: 'translate-z' }),
	// ---------------------------------------------------------------------------
	// Interactivity - accent-color
	...genc('accent', 'accent-color'),
	// Interactivity - appearance
	['appearance-none', '{ appearance: none }'],
	['appearance-auto', '{ appearance: auto }'],
	// Interactivity - caret-color
	...genc('caret', 'caret-color'),
	// Interactivity - color-scheme
	...gen(ii => [`scheme-${ii.replace(' ', '-')}`, `color-scheme: ${ii}`], ['normal', 'dark', 'light', 'light dark', 'only dark', 'only light']),
	// Interactivity - cursor
	...gen(ii => [`cursor-${ii}`, `cursor: ${ii}`], ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed']),
	// Interactivity - field-sizing
	['field-sizing-fixed', '{ field-sizing: fixed }'],
	['field-sizing-auto', '{ field-sizing: auto }'],
	// Interactivity - pointer-events
	['pointer-events-none', '{ pointer-events: none }'],
	['pointer-events-auto', '{ pointer-events: auto }'],
	// Interactivity - resize
	['resize-none', '{ resize: none }'],
	['resize-x', '{ resize: horizontal }'],
	['resize-y', '{ resize: vertical }'],
	['resize-both', '{ resize: both }'],
	// Interactivity - scroll-behavior
	['scroll-auto', '{ scroll-behavior: auto }'],
	['scroll-smooth', '{ scroll-behavior: smooth }'],
	// Interactivity - scroll-margin
	...gens('scroll-m', { prop: 'scroll-margin' }),
	...gens('scroll-mx', { prop: 'scroll-margin-inline' }),
	...gens('scroll-my', { prop: 'scroll-margin-block' }),
	...gens('scroll-mt', { prop: 'scroll-margin-top' }),
	...gens('scroll-mr', { prop: 'scroll-margin-right' }),
	...gens('scroll-ml', { prop: 'scroll-margin-left' }),
	...gens('scroll-mb', { prop: 'scroll-margin-bottom' }),
	...gens('scroll-ms', { prop: 'scroll-margin-inline-start' }),
	...gens('scroll-me', { prop: 'scroll-margin-inline-end' }),
	// Interactivity - scroll-padding
	...gens('scroll-p', { prop: 'scroll-padding' }),
	...gens('scroll-px', { prop: 'scroll-padding-inline' }),
	...gens('scroll-py', { prop: 'scroll-padding-block' }),
	...gens('scroll-pt', { prop: 'scroll-padding-top' }),
	...gens('scroll-pr', { prop: 'scroll-padding-right' }),
	...gens('scroll-pl', { prop: 'scroll-padding-left' }),
	...gens('scroll-pb', { prop: 'scroll-padding-bottom' }),
	...gens('scroll-ps', { prop: 'scroll-padding-inline-start' }),
	...gens('scroll-pe', { prop: 'scroll-padding-inline-end' }),
	// Interactivity - scroll-snap-align
	...gen(ii => [`snap-${ii}`, `scroll-snap-align: ${ii}`], ['start', 'end', 'center']),
	['snap-align-none', '{ scroll-snap-align: none }'],
	// Interactivity - scroll-snap-stop
	['snap-stop-normal', '{ scroll-snap-stop: normal }'],
	['snap-stop-always', '{ scroll-snap-stop: always }'],
	// Interactivity - scroll-snap-type
	['snap-none', '{ scroll-snap-type: none }'],
	['snap-x', '{ scroll-snap-type: x mandatory }'],
	['snap-y', '{ scroll-snap-type: y proximity }'],
	['snap-both', '{ scroll-snap-type: both proximity }'],
	// Interactivity - touch-action
	...gen(ii => [`touch-${ii}`, `touch-action: ${ii}`], ['auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation']),
	// Interactivity - user-select
	['select-none', '{ user-select: none }'],
	['select-text', '{ user-select: text }'],
	['select-all', '{ user-select: all }'],
	['select-auto', '{ user-select: auto }'],
	// Interactivity - will-change
	['will-change-auto', '{ will-change: auto }'],
	['will-change-scroll', '{ will-change: scroll-position }'],
	['will-change-contents', '{ will-change: contents }'],
	['will-change-transform', '{ will-change: transform }'],
	// ---------------------------------------------------------------------------
	// SVG - fill
	...genc('fill', 'fill'),
	// SVG - stroke - unsupported
	...genc('stroke', 'stroke'),
	// SVG - stroke-width - unsupported
	...gen(ii => [`stroke-${ii}`, `stroke-width: ${ii}`], [0, 1, 2]),
	// ---------------------------------------------------------------------------
	// Accessibility - forced-color-adjust
	['forced-color-adjust-auto', '{ forced-color-adjust: auto }'],
	['forced-color-adjust-none', '{ forced-color-adjust: none }'],
])

// -----------------------------------------------------------------------------
// Rule generators
// -----------------------------------------------------------------------------

// Generate with a list.
function* gen(func, list) {
	for (const item of list) {
		const [name, value] = func(item)
		yield [name, `{ ${value} }`]
	}
}

// Generate sizes.
function* gens(cls, options = {}) {
	const { prop = cls, next = '' } = options

	yield [`${cls}-auto`, `${next}{ ${prop}: auto }`]
	yield [`${cls}-full`, `${next}{ ${prop}: 100% }`]
	yield [`${cls}-min`, `${next}{ ${prop}: min-content }`]
	yield [`${cls}-max`, `${next}{ ${prop}: max-content }`]
	yield [`${cls}-fit`, `${next}{ ${prop}: fit-content }`]
	yield [`${cls}-px`, `${next}{ ${prop}: 1px }`]
	yield [`${cls}-0.5`, `${next}{ ${prop}: 2px }`]

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
function* genc(cls, prop, colors = COLORS.entries()) {
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
function* backdrop(filterRules) {
	// Handle gen() output. Naughty assumption that gen() will not be used for less than 3 rules.
	const filterRulesArr = filterRules.length === 2 ? [filterRules] : filterRules

	for (const filterRule of filterRulesArr) {
		yield filterRule
		const [cls, rule] = filterRule
		yield [`backdrop-${cls}`, rule.replace('filter:', 'backdrop-filter:')]
	}
}

// -----------------------------------------------------------------------------
// Runtime builder
// -----------------------------------------------------------------------------

// Global object.
export const tw = {
	instances: new Map(),
	extend,
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

	const { mq, state, util, value } = cls.match(CLASS_PARSER).groups

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
	const escapedUtil = util.replace(/(\/|\[|\]|\.|@)/g, '\\$1')
	const utilWithState = state ? `${state}\\:${escapedUtil}:${state}` : escapedUtil
	let rule
	let index
	if (mq) {
		index = isHighPriority ? instance.sheet.cssRules.length : instance.mqRulesStartIndex
		rule = `${MEDIA_QUERIES.get(mq)} { .${mq}\\:${utilWithState} ${css} }`
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
	Object.entries(queries).forEach(([name, query]) => MEDIA_QUERIES.set(name, query))

	// Inject keyframes.
  Object.entries(keyframes).forEach(([name, keyframes]) => {
    tw.instances.values().forEach(instance => {
      instance.sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, instance.sheet.cssRules.length)
    })
  })

  // Add classes for new colors.
  COLOR_PROPS.entries.forEach(([colorClass, colorProp]) => {
    for (const [cls, css] of genc(colorClass, colorProp, Object.entries(colors))) {
      classes[cls] = css
    }
  })

	// Update utils with new classes.
	Object.entries(classes).forEach(([name, css]) => UTILS.set(name, css))
}

function init(root) {
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
