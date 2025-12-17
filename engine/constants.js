// Generator helpers.
export const COLUMNS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const WIDTHS = [0, 1, 2, 4, 8]
export const OPACITIES = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100]
export const DURATIONS = [75, 100, 150, 200, 300, 500, 700, 1000]
export const SCALES = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150]
export const SKEWS = [0, 1, 2, 3, 6, 12]
export const ORIGINS = [
  'center',
  'top',
  'top-right',
  'right',
  'bottom-right',
  'bottom',
  'bottom-left',
  'left',
  'top-left',
]
export const RADII = [
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
export const Z_INDEXES = [0, 10, 20, 30, 40, 50, 'auto']
export const LINE_CLAMPS = [1, 2, 3, 4, 5, 6, 'none']
export const BRIGHTNESS_LEVELS = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200]
export const CONTRAST_LEVELS = [0, 50, 75, 100, 125, 150, 200]
export const SATURATE_LEVELS = [0, 50, 75, 100, 150, 200]
export const HUE_ROTATE_DEGREES = [0, 15, 30, 60, 90, 180]
export const ROTATE_DEGREES = [0, 1, 2, 3, 6, 12, 45, 90, 180]
export const STROKE_WIDTHS = [0, 1, 2]
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
export const ANIM_TIME = '250ms'

// Compiler helpers.
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
export const HIGH_PRIORITY_RULES = ['col-start', 'row-start', 'hidden', '-none']
export const STRING_SIZES = {
  auto: 'auto',
  px: '1px',
  full: '100%',
  screen: '100vw',
  dvw: '100vw',
  dvh: '100vh',
  lvw: '100lvw',
  lvh: '100lvh',
  svw: '100svw',
  svh: '100svh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
}
