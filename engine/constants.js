//
// Helper constants.
//

export const N = 'calc($ * 4px)'
export const F = 'calc($ * 100%)'

export const ANIM_TIME = '250ms'

export const BLEND_MODES = [
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
]

export const ORIGINS = [
  ['top-left', 'top left'],
  'top',
  ['top-right', 'top right'],
  'left',
  'center',
  'right',
  ['bottom-left', 'bottom left'],
  'bottom',
  ['bottom-right', 'bottom right']
]

export const OVERFLOWS = ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']

export const OVERSCROLLS = ['auto', 'contain', 'none']

export const RADII = [
  ['xs', '2px'],
  ['sm', '4px'],
  ['md', '6px'],
  ['lg', '8px'],
  ['xl', '12px'],
  ['2xl', '16px'],
  ['3xl', '24px'],
  ['full', '50%'],
  ['none', 0]
]

//
// Compiler constants.
//

export const HIGH_PRIORITY_RULES = ['col-start', 'row-start', 'hidden', '-none']

export const KEYFRAMES = new Map([
  ['expand', 'from { opacity: 0; transform: translateY(-8px) } to { opacity: 1 }'],
  ['toast', 'from { opacity: 0; transform: translateY(48px) } to { opacity: 1 }'],
  ['fade', '0% { opacity: 0 } 100% { opacity: 1 }'],
])

export const PSEUDO = new Set([
  'after',
  'backdrop',
  'before',
  'cue',
  'details-content',
  'file-selector-button',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'placeholder',
  'selection',
  'spelling-error',
  'target-text',
])

export const QUERIES = new Map([
  ['sm', '@media screen and (max-width: 599px)'],
  ['md', '@media screen and (min-width: 600px) and (max-width: 959px)'],
  ['lg', '@media screen and (min-width: 960px)'],
  ['landscape', '@media (orientation: landscape)'],
  ['portrait', '@media (orientation: portrait)'],
  ['light', '@media (prefers-color-scheme: light)'],
  ['dark', '@media (prefers-color-scheme: dark)'],
  ['inverted-colors', '@media (inverted-colors: inverted)'],
  ['pointer-coarse', '@media (pointer: coarse)'],
  ['pointer-fine', '@media (pointer: fine)'],
  ['pointer-none', '@media (pointer: none)'],
  ['print', '@media print'],
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
  ['@7xl', '@container (width >= 1280px)'],
])

export const STATES = new Map([
  'active',
  'any-link',
  'checked',
  'default',
  'defined',
  'disabled',
  'empty',
  'enabled',
  'first-child',
  'first-of-type',
  'focus',
  'focus-visible',
  'focus-within',
  'fullscreen',
  'future',
  'host',
  'hover',
  'in-range',
  'indeterminate',
  'invalid',
  'last-child',
  'last-of-type',
  'link',
  'modal',
  'only-child',
  'only-of-type',
  'open',
  'optional',
  'out-of-range',
  'past',
  'picture-in-picture',
  'placeholder-shown',
  'popover-open',
  'read-only',
  'read-write',
  'required',
  'root',
  'scope',
  'target',
  'user-invalid',
  'user-valid',
  'valid',
  'visited',
].reduce((arr, state) => {
  arr.push([state, `:${state}`])
  arr.push([`not-${state}`, `:not(:${state})`])
  arr.push([`has-${state}`, `:has(:${state})`])
  return arr
}, []))

export const STRING_SIZES = {
  'auto': 'auto',
  'px': '1px',
  'full': '100%',
  'screen': '100vw',
  'dvw': '100vw',
  'dvh': '100vh',
  'lvw': '100lvw',
  'lvh': '100lvh',
  'svw': '100svw',
  'svh': '100svh',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  '3xs': '256px',
  '2xs': '288px',
  'xs': '320px',
  'sm': '384px',
  'md': '448px',
  'lg': '512px',
  'xl': '576px',
  '2xl': '672px',
  '3xl': '768px',
  '4xl': '896px',
  '5xl': '1024px',
  '6xl': '1152px',
  '7xl': '1280px',
}
