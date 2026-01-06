import { ANIM_TIME, BLEND_MODES, ORIGINS, RADII, OVERFLOWS, OVERSCROLLS, N, F } from './constants.js'
import { COLORS } from './colors.js'

// Returns a map of styles.
function process (array) {
  const utils = new Map()

  for (const entry of array) {
    // If second argument is an array it means the property name is equal to class name.
    // Add it in for consistency.
    Array.isArray(entry.at(1)) && entry.splice(1, 0, entry.at(0))

    const [name, prop, values] = entry

    // If no values, use the prop as is.
    if (!values) {
      utils.set(name, `{ ${prop} }`)
      continue
    }

    // Populate values.
    for (const value of values) {
      // Dynamic.
      if (!value.length) {
        // Dynamic rule.
        const prefix = value.prefix ? ` ${value.prefix} ` : ''
        utils.set(`${name}-`, { ...value, css: `${prefix}{ ${prop}: $ }` })
      } else {
        // Static rule.
        const [a, b] = Array.isArray(value) ? value : [value, value]
        utils.set([name, a].filter(Boolean).join('-'), `{ ${prop}: ${b} }`)
      }
    }
  }

  return utils
}

export const UTILS = process([
  ['@container', 'container-type: inline-size'],

  // ---------------------------------------------------------------------------
  // Layout
  // ---------------------------------------------------------------------------

  // aspect-ratio
  ['aspect', 'aspect-ratio', [
    ['square', '1 / 1'],
    ['video', '16 / 9'],
    'auto',
    { raw: '$', fraction: '$' }
  ]],

  // columns
  ['columns', [
    { raw: '$', number: '$', fraction: '$', string: '$' }
  ]],

  // break-after
  ['break-after', [
    'auto',
    'avoid',
    'avoid-page',
    'page',
    'left',
    'right',
    'column'
  ]],

  // break-before
  ['break-before', [
    'auto',
    'avoid',
    'avoid-page',
    'page',
    'left',
    'right',
    'column'
  ]],

  // break-inside
  ['break-inside', [
    'auto',
    'avoid',
    'avoid-page',
    'avoid-column'
  ]],

  // box-decoration-break
  ['box-decoration', 'box-decoration-break', [
    'clone',
    'slice'
  ]],

  // box-sizing
  ['box', 'box-sizing', [
    ['border', 'border-box'],
    ['content', 'content-box']
  ]],

  // display
  ['', 'display', [
    'inline',
    'block',
    'inline-block',
    'flow-root',
    'flex',
    'inline-flex',
    'grid',
    'inline-grid',
    'contents',
    'table',
    'inline-table',
    'list-item',
    ['hidden', 'none']
  ]],
  ['sr-only', 'clip: rect(0, 0, 0, 0); position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; white-space: nowrap; border-width: 0'],
  ['not-sr-only', 'clip: auto; position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; white-space: normal'],

  // float
  ['float', [
    ['start', 'inline-start'],
    ['end', 'inline-end'],
    'left',
    'right',
    'none'
  ]],

  // clear
  ['clear', [
    ['start', 'inline-start'],
    ['end', 'inline-end'],
    'left',
    'right',
    'both',
    'none'
  ]],

  // isolation
  ['', 'isolation', [
    ['isolate', 'isolate'],
    ['isolation-auto', 'auto']
  ]],

  // object-fit
  ['object', 'object-fit', [
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down'
  ]],

  // object-position
  ['object', 'object-position', [
    'bottom',
    'center',
    'left',
    ['left-bottom', 'left bottom'],
    ['left-top', 'left top'],
    'right',
    ['right-bottom', 'right bottom'],
    ['right-top', 'right top'],
    'top',
    { raw: '$' }
  ]],

  // overflow
  ['overflow', OVERFLOWS],
  ['overflow-x', OVERFLOWS],
  ['overflow-y', OVERFLOWS],

  // overscroll-behavior
  ['overscroll', 'overscroll-behavior', OVERSCROLLS],
  ['overscroll-x', 'overscroll-behavior-x', OVERSCROLLS],
  ['overscroll-y', 'overscroll-behavior-y', OVERSCROLLS],

  // scrollbar-gutter
  ['scrollbar', 'scrollbar-gutter', [
    'auto',
    'stable',
    ['both', 'stable both-edges']
  ]],

  // position
  ['', 'position', [
    'static',
    'fixed',
    'absolute',
    'relative',
    'sticky'
  ]],

  // top / right / bottom / left
  ['inset', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['inset-x', 'inset-inline', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['inset-y', 'inset-block', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['start', 'inset-inline-start', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['end', 'inset-inline-end', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['top', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['right', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['bottom', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],
  ['left', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // visibility
  ['', 'visibility', [
    'visible',
    ['invisible', 'hidden'],
    'collapse'
  ]],

  // z-index
  ['z', 'z-index', [
    'auto',
    { raw: '$', number: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // Flexbox & Grid
  // ---------------------------------------------------------------------------

  // flex-basis
  ['basis', 'flex-basis', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // flex-direction
  ['flex', 'flex-direction', [
    'row',
    'row-reverse',
    ['col', 'column'],
    ['col-reverse', 'column-reverse']
  ]],

  // flex-wrap
  ['flex', 'flex-wrap', [
    'nowrap',
    'wrap',
    'wrap-reverse'
  ]],

  // flex
  ['flex', [
    ['auto', '1 1 auto'],
    ['initial', '0 1 auto'],
    'none',
    { raw: '$', number: '$', fraction: F }
  ]],

  // flex-grow
  ['grow', 'flex-grow', [
    ['', 1],
    { raw: '$', number: '$' }
  ]],

  // flex-shrink
  ['shrink', 'flex-shrink', [
    ['', 1],
    { raw: '$', number: '$' }
  ]],

  // order
  ['order', [
    ['first', '-9999'],
    ['last', '9999'],
    ['none', '0'],
    { raw: '$', number: '$' }
  ]],

  // grid-template-columns
  ['grid-cols', 'grid-template-columns', [
    'none',
    'subgrid',
    { raw: '$', number: 'repeat($, minmax(0, 1fr))' }
  ]],

  // grid-column
  ['col-span', 'grid-column', [
    ['full', '1 / -1'],
    { raw: 'span $ / span $', number: 'span $ / span $' }
  ]],
  ['col-start', 'grid-column-start', [
    'auto',
    { raw: '$', number: '$' }
  ]],
  ['col-end', 'grid-column-end', [
    'auto',
    { raw: '$', number: '$' }
  ]],
  ['col', 'grid-column', [
    'auto',
    { raw: '$', number: '$' }
  ]],

  // grid-template-rows
  ['grid-rows', 'grid-template-rows', [
    'none',
    'subgrid',
    { raw: '$', number: 'repeat($, minmax(0, 1fr))' }
  ]],

  // grid-row
  ['row-span', 'grid-row', [
    ['full', '1 / -1'],
    { raw: 'span $ / span $', number: 'span $ / span $' }
  ]],
  ['row-start', 'grid-row-start', [
    'auto',
    { raw: '$', number: '$' }
  ]],
  ['row-end', 'grid-row-end', [
    'auto',
    { raw: '$', number: '$' }
  ]],
  ['row', 'grid-row', [
    'auto',
    { raw: '$', number: '$' }
  ]],

  // grid-auto-flow
  ['grid-flow', 'grid-auto-flow', [
    'row',
    ['col', 'column'],
    'dense',
    ['row-dense', 'row dense'],
    ['col-dense', 'column dense']
  ]],

  // grid-auto-columns
  ['auto-cols', 'grid-auto-columns', [
    'auto',
    ['min', 'min-content'],
    ['max', 'max-content'],
    ['fr', 'minmax(0, 1fr)'],
    { raw: '$' }
  ]],

  // Flexbox & Grid - grid-auto-rows
  ['auto-rows', 'grid-auto-rows', [
    'auto',
    ['min', 'min-content'],
    ['max', 'max-content'],
    ['fr', 'minmax(0, 1fr)'],
    { raw: '$' }
  ]],

  // gap
  ['gap', [
    { raw: '$', number: N }
  ]],
  ['gap-x', 'column-gap', [
    { raw: '$', number: N }
  ]],
  ['gap-y', 'row-gap', [
    { raw: '$', number: N }
  ]],

  // justify-content
  ['justify', 'justify-content', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['evenly', 'space-evenly'],
    'stretch',
    'normal'
  ]],

  // justify-items
  ['justify-items', [
    'start',
    'end',
    'center',
    'stretch',
    'normal'
  ]],

  // justify-self
  ['justify-self', [
    'auto',
    'start',
    'end',
    'center',
    'stretch'
  ]],

  // align-content
  ['content', 'align-content', [
    'normal',
    'center',
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['evenly', 'space-evenly'],
    'baseline',
    'stretch'
  ]],

  // align-items
  ['items', 'align-items', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['end-safe', 'safe flex-end'],
    'center',
    ['center-safe', 'safe center'],
    'baseline',
    ['baseline-last', 'last baseline'],
    'stretch'
  ]],

  // align-self
  ['self', 'align-self', [
    'auto',
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    'stretch',
    'baseline'
  ]],

  // place-content
  ['place-content', [
    'center',
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['evenly', 'space-evenly'],
    'baseline',
    'stretch'
  ]],

  // place-items
  ['place-items', [
    'start',
    'end',
    'center',
    'baseline',
    'stretch'
  ]],

  // place-self
  ['place-self', [
    'auto',
    'start',
    'end',
    'center',
    'stretch'
  ]],

  // ---------------------------------------------------------------------------
  // Spacing
  // ---------------------------------------------------------------------------

  // padding
  ['p', 'padding', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['px', 'padding-inline', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['py', 'padding-block', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['ps', 'padding-inline-start', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['pe', 'padding-inline-end', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['pt', 'padding-top', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['pr', 'padding-right', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['pb', 'padding-bottom', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['pl', 'padding-left', [
    { raw: '$', number: N, string: '$' }
  ]],

  // maring
  ['m', 'margin', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['mx', 'margin-inline', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['my', 'margin-block', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['ms', 'margin-inline-start', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['me', 'margin-inline-end', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['mt', 'margin-top', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['mr', 'margin-right', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['mb', 'margin-bottom', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['ml', 'margin-left', [
    { raw: '$', number: N, string: '$' }
  ]],
  ['space-x', 'margin-inline-end', [
    { raw: '$', number: N, string: '$', prefix: '> :not(:last-child)' }
  ]],
  ['space-y', 'margin-bottom', [
    { raw: '$', number: N, string: '$', prefix: '> :not(:last-child)' }
  ]],

  // width
  ['w', 'width', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // min-width
  ['min-w', 'min-width', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // max-width
  ['max-w', 'max-width', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // height
  ['h', 'height', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // min-width
  ['min-h', 'min-height', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // max-width
  ['max-h', 'max-height', [
    { raw: '$', number: N, fraction: F, string: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------

  // font-family
  ['font-sans', 'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
  ['font-serif', 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
  ['font-mono', 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
  ['font', 'font-family', [
    { raw: '$' }
  ]],

  // font-size
  ['text-xs', 'font-size: 12px; line-height: 1.333'],
  ['text-sm', 'font-size: 14px; line-height: 1.429'],
  ['text-base', 'font-size: 16px; line-height: 1.5'],
  ['text-lg', 'font-size: 18px; line-height: 1.555'],
  ['text-xl', 'font-size: 20px; line-height: 1.4'],
  ['text-2xl', 'font-size: 24px; line-height: 1.333'],
  ['text-3xl', 'font-size: 30px; line-height: 1.2'],
  ['text-4xl', 'font-size: 36px; line-height: 1.111'],
  ['text-5xl', 'font-size: 48px; line-height: 1'],
  ['text-6xl', 'font-size: 60px; line-height: 1'],
  ['text-7xl', 'font-size: 72px; line-height: 1'],
  ['text-8xl', 'font-size: 96px; line-height: 1'],
  ['text-9xl', 'font-size: 128px; line-height: 1'],

  // font-smoothing
  ['antialiased', '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale'],
  ['subpixel-antialiased', '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto'],

  // font-style
  ['', 'font-style', [
    'italic',
    ['not-italic', 'normal']
  ]],

  // font-weight
  ['font', 'font-weight', [
    ['thin', 100],
    ['extralight', 200],
    ['light', 300],
    ['normal', 400],
    ['medium', 500],
    ['semibold', 600],
    ['bold', 700],
    ['extrabold', 800],
    ['black', 900]
  ]],

  // font-stretch
  ['font-stretch', [
    'ultra-condensed',
    'extra-condensed',
    'condensed',
    'semi-condensed',
    'normal',
    'semi-expanded',
    'expanded',
    'extra-expanded',
    'ultra-expanded'
  ]],

  // font-variant-numeric
  ['', 'font-variant-numeric', [
    ['normal-nums', 'normal'],
    'ordinal',
    'slashed-zero',
    'lining-nums',
    'oldstyle-nums',
    'proportional-nums',
    'tabular-nums',
    'diagonal-fractions',
    'stacked-fractions'
  ]],

  // letter-spacing
  ['tracking', 'letter-spacing', [
    ['tighter', '-0.05em'],
    ['tight', '-0.025em'],
    ['normal', '0px'],
    ['wide', '0.025em'],
    ['wider', '0.05em'],
    ['widest', '0.1em'],
    { raw: '$' }
  ]],

  // line-clamp
  ['line-clamp', 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp', [
    'none',
    { raw: '$' }
  ]],

  // line-height
  ['leading', 'line-height', [
    ['none', 1],
    ['tight', 1.25],
    ['snug', 1.375],
    ['normal', 1.5],
    ['relaxed', 1.625],
    ['loose', 2]
  ]],

  // list-style-image
  ['list-image', 'list-style-image', [
    'none',
    { raw: '$' }
  ]],

  // list-style-position
  ['list', 'list-style-position', [
    'inside',
    'outside'
  ]],

  // list-style-type
  ['list', 'list-style-type', [
    'disc',
    'decimal',
    'none',
    { raw: '$' }
  ]],

  // text-align
  ['text', 'text-align', [
    'left',
    'center',
    'right',
    'justify',
    'start',
    'end'
  ]],

  // text-color
  ['text', 'color', COLORS],

  // text-decoration-line
  ['', 'text-decoration-line', [
    'underline',
    'overline',
    'line-through',
    ['no-underline', 'none']
  ]],

  // text-decoration-color
  ['decoration', 'text-decoration-color', COLORS],

  // text-decoration-style
  ['decoration', 'text-decoration-style', [
    'solid',
    'double',
    'dotted',
    'dashed',
    'wavy'
  ]],

  // text-decoration-thickness
  ['decoration', 'text-decoration-thickness', [
    'auto',
    'from-font',
    { raw: '$', number: '$px' }
  ]],

  // text-undeline-offset
  ['underline-offset', 'text-underline-offset', [
    'auto',
    { raw: '$', number: '$px' }
  ]],

  // text-transform
  ['', 'text-transform', [
    'uppercase',
    'lowercase', 'capitalize', ['normal-case', 'none']
  ]],

  // text-overflow
  ['truncate', 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap'],
  ['overflow', 'text-overflow', [
    'ellipsis',
    'clip'
  ]],

  // text-wrap
  ['text', 'text-wrap', [
    'wrap',
    'nowrap',
    'balance',
    'pretty'
  ]],

  // text-indent
  ['-indent-px', 'text-indent: -1px'],
  ['indent', 'text-indent', [
    ['px', '1px'],
    { raw: '$', number: N }
  ]],

  // vertical-align
  ['align', 'vertical-align', [
    'baseline',
    'top',
    'middle',
    'bottom',
    'text-top',
    'text-bottom',
    'sub',
    'super',
    { raw: '$' }
  ]],

  // white-space
  ['whitespace', 'white-space', [
    'normal',
    'nowrap',
    'pre',
    'pre-line',
    'pre-wrap',
    'break-spaces'
  ]],

  // word-break
  ['break', 'word-break', [
    'normal',
    ['all', 'break-all'],
    ['keep', 'keep-all']
  ]],

  // overflow-wrap
  ['wrap', 'overflow-wrap', [
    'break-word',
    'anywhere',
    'normal'
  ]],

  // hyphens
  ['hyphens', [
    'none',
    'manual',
    'auto'
  ]],

  // content
  ['content', [
    'none',
    { raw: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // Backgrounds
  // ---------------------------------------------------------------------------

  // background-attachment
  ['bg', 'background-attachment', [
    'fixed',
    'local',
    'scroll'
  ]],

  // background-clip
  ['bg-clip', 'background-clip', [
    ['border', 'border-box'],
    ['padding', 'padding-box'],
    ['content', 'content-box'],
    'text'
  ]],

  // background-color
  ['bg', 'background-color', COLORS],

  // background-image
  ['bg', 'background-image', [
    'none',
    { raw: '$' }
  ]],

  // background-origin
  ['bg', 'background-origin', [
    'border-box',
    'padding-box',
    'content-box'
  ]],

  // background-position
  ['bg', 'background-position', [
    ['top-left', 'top left'],
    'top',
    ['top-right', 'top right'],
    'left',
    'center',
    'right',
    ['bottom-left', 'bottom left'],
    'bottom',
    ['bottom-right', 'bottom right'],
  ]],
  ['bg-position', 'background-position', [
    { raw: '$' }
  ]],

  // background-repeat
  ['bg', 'background-repeat', [
    'repeat',
    'repeat-x',
    'repeat-y',
    'space',
    'round',
    'no-repeat'
  ]],

  // background-size
  ['bg', 'background-size', [
    'auto',
    'cover',
    'contain'
  ]],
  ['bg-size', 'background-size', [
    { raw: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // Borders
  // ---------------------------------------------------------------------------

  // border-radius
  ['rounded', 'border-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-ss', 'border-start-start-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-se', 'border-start-end-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-ee', 'border-end-end-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-es', 'border-end-start-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-tl', 'border-top-left-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-tr', 'border-top-right-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-br', 'border-bottom-right-radius', [
    ...RADII,
    { raw: '$' }
  ]],
  ['rounded-bl', 'border-bottom-left-radius', [
    ...RADII,
    { raw: '$' }
  ]],

  // border-width
  ['border', 'border-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-x', 'border-inline-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-y', 'border-block-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-s', 'border-inline-start-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-e', 'border-inline-end-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-t', 'border-top-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-r', 'border-right-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-b', 'border-bottom-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],
  ['border-l', 'border-left-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],

  // border-color
  ['border', 'border-color', COLORS],

  // border-style
  ['border', 'border-style', [
    'solid',
    'dashed',
    'dotted',
    'double',
    'hidden',
    'none'
  ]],

  // outline-width
  ['outline', 'outline-width', [
    ['', '1px'],
    { raw: '$', number: '$px' }
  ]],

  // outline-color
  ['outline', 'outline-color', COLORS],

  // outline-style
  ['outline', 'outline-style', [
    'solid',
    'dashed',
    'dotted',
    'double',
    'none'
  ]],
  // ['outline-hidden', 'outline: 2px solid transparent; outline-offset: 2px'],

  // outline-offset
  ['outline-offset', [
    { raw: '$', number: '$px' }
  ]],

  // ---------------------------------------------------------------------------
  // Effects
  // ---------------------------------------------------------------------------
  ['shadow', 'box-shadow', [
    ['', '0 1px rgb(0 0 0 / 0.05)'],
    ['2xs', '0 1px rgb(0 0 0 / 0.05)'],
    ['xs', '0 1px 2px 0 rgb(0 0 0 / 0.05)'],
    ['sm', '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'],
    ['md', '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'],
    ['lg', '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'],
    ['xl', '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'],
    ['2xl', '0 25px 50px -12px rgb(0 0 0 / 0.25)'],
    ['none', '0 0 rgb(0 0 0 / 0)'],
    { raw: '$' }
  ]],

  // text-shadow
  ['text-shadow', 'text-shadow', [
    ['2xs', '0px 1px 0px rgb(0 0 0 / 0.15)'],
    ['xs', '0px 1px 1px rgb(0 0 0 / 0.2)'],
    ['sm', '0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075)'],
    ['md', '0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1)'],
    ['lg', '0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1)'],
    'none',
    { raw: '$' }
  ]],

  // opacity
  ['opacity', [
    { raw: '$', number: '$%' }
  ]],

  // mix-blend-mode
  ['mix-blend', 'mix-blend-mode', BLEND_MODES],

  // background-blend-mode
  ['bg-blend', 'background-blend-mode', BLEND_MODES],

  // mask-clip
  ['mask', 'mask-clip', [
    ['clip-border', 'border-box'],
    ['clip-padding', 'padding-box'],
    ['clip-content', 'content-box'],
    ['clip-fill', 'fill-box'],
    ['clip-stroke', 'stroke-box'],
    ['clip-view', 'view-box'],
    'no-clip'
  ]],

  // mask-composite
  ['mask', 'mask-composite', [
    'add',
    'subtract',
    'intersect',
    'exclude'
  ]],

  // mask-image
  ['mask', 'mask-image', [
    'none',
    { raw: '$' }
  ]],

  // mask-mode
  ['mask', 'mask-mode', [
    'alpha',
    'luminance',
    ['match', 'match-source']
  ]],

  // mask-origin
  ['mask-origin', [
    ['border', 'border-box'],
    ['padding', 'padding-box'],
    ['content', 'content-box'],
    ['fill', 'fill-box'],
    ['stroke', 'stroke-box'],
    ['view', 'view-box']
  ]],

  // mask-position
  ['mask', 'mask-position', [
    ['top-left', 'top left'],
    'top',
    ['top-right', 'top right'],
    'left',
    'center',
    'right',
    ['bottom-left', 'bottom left'],
    'bottom',
    ['bottom-right', 'bottom right'],
  ]],
  ['mask-position', [
    { raw: '$' }
  ]],

  // mask-repeat
  ['mask', 'mask-repeat', [
    'repeat',
    'no-repeat',
    'repeat-x',
    'repeat-y',
    ['repeat-space', 'space'],
    ['repeat-round', 'round']
  ]],

  // mask-size
  ['mask', 'mask-size', [
    'auto',
    'cover',
    'contain'
  ]],

  ['mask-size', [
    { raw: '$' }
  ]],

  // mask-type
  ['mask-type', [
    'alpha',
    'luminance'
  ]],

  // ---------------------------------------------------------------------------
  // Filters
  // ---------------------------------------------------------------------------

  // blur
  ['blur', 'filter', [
    ['xs', 'blur(4px)'],
    ['sm', 'blur(8px)'],
    ['md', 'blur(12px)'],
    ['lg', 'blur(16px)'],
    ['xl', 'blur(24px)'],
    ['2xl', 'blur(40px)'],
    ['3xl', 'blur(64px)'],
    ['none', 'none'],
    { raw: 'blur($)' }
  ]],
  ['backdrop-blur', 'backdrop-filter', [
    ['xs', 'blur(4px)'],
    ['sm', 'blur(8px)'],
    ['md', 'blur(12px)'],
    ['lg', 'blur(16px)'],
    ['xl', 'blur(24px)'],
    ['2xl', 'blur(40px)'],
    ['3xl', 'blur(64px)'],
    'none',
    { raw: 'blur($)' }
  ]],

  // brightness
  ['brightness', 'filter', [
    { raw: 'brightness($)', number: 'brightness($%)' }
  ]],
  ['backdrop-brightness', 'backdrop-filter', [
    { raw: 'brightness($)', number: 'brightness($%)' }
  ]],
  // contrast
  ['contrast', 'filter', [
    { raw: 'contrast($)', number: 'contrast($%)' }
  ]],
  ['backdrop-contrast', 'backdrop-filter', [
    { raw: 'contrast($)', number: 'contrast($%)' }
  ]],

  // drop-shadow
  ['drop-shadow', 'filter', [
    ['xs', 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))'],
    ['sm', 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.15))'],
    ['md', 'drop-shadow(0 3px 3px rgb(0 0 0 / 0.12))'],
    ['lg', 'drop-shadow(0 4px 4px rgb(0 0 0 / 0.15))'],
    ['xl', 'drop-shadow(0 9px 7px rgb(0 0 0 / 0.1))'],
    ['2xl', 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'],
    ['none', 'drop-shadow(0 0 rgba(0, 0, 0, 0))'],
    { raw: 'drop-shadow($)' }
  ]],

  // grayscale
  ['grayscale', 'filter', [
    ['', 'grayscale(100%)'],
    { raw: 'grayscale($)', number: 'grayscale($%)' }
  ]],
  ['backdrop-grayscale', 'backdrop-filter', [
    ['', 'grayscale(100%)'],
    { raw: 'grayscale($)', number: 'grayscale($%)' }
  ]],

  // hue-rotate
  ['hue-rotate', 'filter', [
    { raw: 'hue-rotate($)', number: 'hue-rotate($deg)' }
  ]],
  ['backdrop-hue-rotate', 'backdrop-filter', [
    { raw: 'hue-rotate($)', number: 'hue-rotate($deg)' }
  ]],

  // invert
  ['invert', 'filter', [
    { raw: 'invert($)', number: 'invert($%)' }
  ]],
  ['backdrop-invert', 'backdrop-filter', [
    { raw: 'invert($)', number: 'invert($%)' }
  ]],

  // backdrop-opaity
  ['backdrop-opacity', 'backdrop-filter', [
    { raw: 'opacity($)', number: 'opacity($%)' }
  ]],

  // saturate
  ['saturate', 'filter', [
    { raw: 'saturate($)', number: 'saturate($%)' }
  ]],
  ['backdrop-saturate', 'backdrop-filter', [
    { raw: 'saturate($)', number: 'saturate($%)' }
  ]],

  // sepia
  ['sepia', 'filter', [
    ['', 'sepia(100%)'],
    { raw: 'sepia($)', number: 'sepia($%)' }
  ]],
  ['backdrop-sepia', 'backdrop-filter', [
    ['', 'sepia(100%)'],
    { raw: 'sepia($)', number: 'sepia($%)' }
  ]],

  // misc
  ['filter', 'filter', [
    'none',
    { raw: '$' }
  ]],
  ['backdrop-filter', 'backdrop-filter', [
    'none',
    { raw: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // Tables
  // ---------------------------------------------------------------------------

  // border-collapse
  ['border', 'border-collapse', [
    'collapse',
    'separate'
  ]],

  // border-spacing
  ['border-spacing', [
    { raw: '$', number: N }
  ]],
  ['border-spacing-x', 'border-spacing', [
    { raw: '$ 0', number: `${N} 0` }
  ]],
  ['border-spacing-y', 'border-spacing', [
    { raw: '0 $', number: `0 ${N}` }
  ]],

  // table-layout
  ['table', 'table-layout', [
    'auto',
    'fixed'
  ]],

  // caption-side
  ['caption', 'caption-side', [
    'top',
    'bottom'
  ]],

  // ---------------------------------------------------------------------------
  // Transitions & Animations
  // ---------------------------------------------------------------------------

  // transition-property
  ['transition', 'transition-property', [
    ['', 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter'],
    'all',
    ['colors', 'color, background-color, border-color, text-decoration-color, fill, stroke'],
    'opacity',
    ['shadow', 'box-shadow'],
    'transform',
    'none',
    { raw: '$' }
  ]],

  // transition-behavior
  ['transition', 'transition-behavior', [
    'normal',
    ['discrete', 'allow-discrete']
  ]],

  // transition-duration
  ['duration', 'transition-duration', [
    'initial',
    { raw: '$', number: '$ms' }
  ]],

  // transition-timing-function
  ['ease', 'transition-timing-function', [
    'linear',
    ['in', 'ease-in'],
    ['out', 'ease-out'],
    ['in-out', 'ease-in-out'],
    'initial',
    { raw: '$' }
  ]],

  // transition-delay
  ['delay', 'transition-delay', [
    { raw: '$', number: '$ms' }
  ]],

  // animations
  ['animate', 'animation', [
    ['expand', `expand ${ANIM_TIME} ease-in-out`],
    ['toast', `toast ${ANIM_TIME} ease-in-out`],
    ['fade', `fade ${ANIM_TIME} ease-in-out`],
    'none',
    { raw: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // Transforms
  // ---------------------------------------------------------------------------

  // backface-visibility
  ['backface', 'backface-visibility', [
    'visible',
    'hidden'
  ]],

  // perspective
  ['perspective', [
    ['dramatic', '100px'],
    ['near', '300px'],
    ['normal', '500px'],
    ['midrange', '800px'],
    ['distant', '1200px'],
    'none',
    { raw: '$' }
  ]],

  // perspective-origin
  ['perspective-origin', [
    ...ORIGINS,
    { raw: '$' }
  ]],

  // rotate
  ['rotate', [
    'none',
    { raw: '$', number: '$deg' }
  ]],

  // scale
  ['scale', [
    { raw: '$', number: '$% $%' }
  ]],
  ['scale-x', 'scale', [
    { raw: '$ 100%', number: '$% 100%' }
  ]],
  ['scale-y', 'scale', [
    { raw: '100% $', number: '100% $%' }
  ]],

  // skew
  ['skew', 'transform', [
    { raw: 'skewX($) skewY($)', number: 'skewX($deg) skewY($deg)' }
  ]],
  ['skew-x', 'transform', [
    { raw: 'skewX($)', number: 'skewX($deg)' }
  ]],
  ['skew-y', 'transform', [
    { raw: 'skewY($)', number: 'skewY($deg)' }
  ]],

  // transform
  ['transform', [
    'none',
    { raw: '$' }
  ]],

  // transform-origin
  ['origin', 'transform-origin', [
    ...ORIGINS,
    { raw: '$' }
  ]],

  // transform-style
  ['transform', 'transform-style', [
    ['3d', 'preserve-3d'],
    'flat'
  ]],

  // translate
  ['translate', [
    { raw: '$', number: `${N} ${N}`, fraction: `${F} ${F}`, string: '$ $' }
  ]],
  ['translate-x', 'translate', [
    { raw: '$', number: `${N}`, fraction: `${F}`, string: '$' }
  ]],
  ['translate-y', 'translate', [
    { raw: '0 $', number: `0 ${N}`, fraction: `0 ${F}`, string: '0 $' }
  ]],

  // ---------------------------------------------------------------------------
  // Interactivity
  // ---------------------------------------------------------------------------

  // accent-color
  ['accent', 'accent-color', COLORS],

  // appearance
  ['appearance', [
    'none',
    'auto'
  ]],

  // caret-color
  ['caret', 'caret-color', COLORS],

  // color-scheme
  ['scheme', 'color-scheme', [
    'normal',
    'dark',
    'light',
    ['light-dark', 'light dark'],
    ['only-dark', 'only dark'],
    ['only-light', 'only light']
  ]],

  // cursor
  ['cursor', [
    'auto',
    'default',
    'pointer',
    'wait',
    'text',
    'move',
    'not-allowed'
  ]],

  // field-sizing
  ['field-sizing', [
    'fixed',
    'content'
  ]],

  // pointer-events
  ['pointer-events', [
    'none',
    'auto'
  ]],

  // resize
  ['resize', [
    'none',
    ['x', 'horizontal'],
    ['y', 'vertical'],
    'both'
  ]],

  // scroll-behavior
  ['scroll', 'scroll-behavior', [
    'auto',
    'smooth'
  ]],

  // scroll-margin
  ['scroll-m', 'scroll-margin', [
    { raw: '$', number: N }
  ]],
  ['scroll-mx', 'scroll-margin-inline', [
    { raw: '$', number: N }
  ]],
  ['scroll-my', 'scroll-margin-block', [
    { raw: '$', number: N }
  ]],
  ['scroll-ms', 'scroll-margin-inline-start', [
    { raw: '$', number: N }
  ]],
  ['scroll-me', 'scroll-margin-inline-end', [
    { raw: '$', number: N }
  ]],
  ['scroll-mt', 'scroll-margin-top', [
    { raw: '$', number: N }
  ]],
  ['scroll-mr', 'scroll-margin-right', [
    { raw: '$', number: N }
  ]],
  ['scroll-mb', 'scroll-margin-bottom', [
    { raw: '$', number: N }
  ]],
  ['scroll-ml', 'scroll-margin-left', [
    { raw: '$', number: N }
  ]],

  // scroll-padding
  ['scroll-p', 'scroll-padding', [
    { raw: '$', number: N }
  ]],
  ['scroll-px', 'scroll-padding-inline', [
    { raw: '$', number: N }
  ]],
  ['scroll-py', 'scroll-padding-block', [
    { raw: '$', number: N }
  ]],
  ['scroll-ps', 'scroll-padding-inline-start', [
    { raw: '$', number: N }
  ]],
  ['scroll-pe', 'scroll-padding-inline-end', [
    { raw: '$', number: N }
  ]],
  ['scroll-pt', 'scroll-padding-top', [
    { raw: '$', number: N }
  ]],
  ['scroll-pr', 'scroll-padding-right', [
    { raw: '$', number: N }
  ]],
  ['scroll-pb', 'scroll-padding-bottom', [
    { raw: '$', number: N }
  ]],
  ['scroll-pl', 'scroll-padding-left', [
    { raw: '$', number: N }
  ]],

  // scroll-snap-align
  ['snap', 'scroll-snap-align', [
    'start',
    'end',
    'center',
    ['align-none', 'none']
  ]],

  // sroll-snap-stop
  ['snap', 'scroll-snap-stop', [
    'normal',
    'always'
  ]],

  // scroll-snap-type
  ['snap', 'scroll-snap-type', [
    'none',
    ['x', 'x mandatory'],
    ['y', 'y mandatory'],
    ['both', 'both proximity']
  ]],

  // touch-action
  ['touch', 'touch-action', [
    'auto',
    'none',
    'pan-x',
    'pan-left',
    'pan-right',
    'pan-y',
    'pan-up',
    'pan-down',
    'pinch-zoom',
    'manipulation'
  ]],

  // user-select
  ['select', 'user-select', [
    'text',
    'all',
    'auto',
    'none'
  ]],

  // will-change
  ['will-change', [
    'auto',
    ['scroll', 'scroll-position'],
    'contents',
    'transform',
    { raw: '$' }
  ]],

  // ---------------------------------------------------------------------------
  // SVG
  // ---------------------------------------------------------------------------

  // fill
  ['fill', COLORS],

  // stroke
  ['stroke', COLORS],

  // stroke-width
  ['stroke', 'stroke-width', [
    { raw: '$', number: '$px' }
  ]],

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  ['forced-color-adjust', [
    'auto',
    'none'
  ]]
])
