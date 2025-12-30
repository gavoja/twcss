import { ANIM_TIME, BLEND_MODES, ORIGINS, RADII, OVERFLOWS, OVERSCROLLS } from './constants.js'
import { backdrop, gen, genc } from './generators.js'

const UNIT_NUMBER = { number: 'calc($ * 4px)' }
const UNIT_FRACTION = { fraction: 'calc($ * 100%)' }
const UNIT_ALL = { ...UNIT_NUMBER, ...UNIT_FRACTION, string: '$' }

// Tries to follow Tailwind's order.
export const UTILS = new Map([
  // ---------------------------------------------------------------------------
  ['@container', '{ container-type: inline-size }'],
  // Layout - aspect-ratio
  ...gen(
    (a, b) => [`aspect-${a}`, `aspect-ratio: ${b}`],
    [['square', '1 / 1'], ['video', '16 / 9'], 'auto']
  ),
  ['aspect-', { css: '{ aspect-ratio: $ }', fraction: '$' }],
  // Layout - columns
  ['columns-', { css: '{ columns: $ }', number: '$', string: '$' }],
  // Layout - break-after
  ...gen(
    a => [`break-after-${a}`, `break-after: ${a}`],
    ['auto', 'avoid', 'avoid-page', 'page', 'left', 'right', 'column']
  ),
  // Layout - break-before
  ...gen(
    a => [`break-before-${a}`, `break-before: ${a}`],
    ['auto', 'avoid', 'avoid-page', 'page', 'left', 'right', 'column']
  ),
  // Layout - break-inside
  ...gen(
    a => [`break-inside-${a}`, `break-inside: ${a}`],
    ['auto', 'avoid', 'avoid-page', 'avoid-column']
  ),
  // Layout - box-decoration-break
  ...gen(
    a => [`box-decoration-${a}`, `box-decoration-break: ${a}`],
    ['clone', 'slice']
  ),
  // Layout - box-sizing
  ...gen(
    a => [`box-${a}`, `box-sizing: ${a}-box`],
    ['border', 'content']
  ),
  // Layout - display
  ...gen(
    (a, b) => [`${a}`, `display: ${b}`],
    ['inline', 'block', 'inline-block', 'flow-root', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents', 'table', 'inline-table', 'list-item', ['hidden', 'none']]
  ),
  [
    'sr-only',
    '{ clip: rect(0, 0, 0, 0); position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; white-space: nowrap; border-width: 0 }',
  ],
  [
    'not-sr-only',
    '{ clip: auto; position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; white-space: normal }',
  ],
  // Layout - float
  ...gen(
    (a, b) => [`float-${a}`, `float: ${b}`],
    [['start', 'inline-start'], ['end', 'inline-end'], 'left', 'right', 'none']
  ),
  // Layout - clear
  ...gen(
    (a, b) => [`clear-${a}`, `clear: ${b}`],
    [['start', 'inline-start'], ['end', 'inline-end'], 'left', 'right', 'both', 'none']
  ),
  // Layout - isolation
  ['isolate', '{ isolation: isolate }'],
  ['isolation-auto', '{ isolation: auto }'],
  // Layout - object-fit
  ...gen(
    a => [`object-${a}`, `object-fit: ${a}`],
    ['contain', 'cover', 'fill', 'none', 'scale-down']
  ),
  // Layout - object-position
  ...gen(
    a => [`object-${a.replace(/ /g, '-')}`, `object-position: ${a}`],
    ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top']
  ),
  ['object-', { css: '{ object-position: $ }' }],
  // Layout - overflow
  ...gen(a => [`overflow-${a}`, `overflow: ${a}`], OVERFLOWS),
  ...gen(a => [`overflow-x-${a}`, `overflow-x: ${a}`], OVERFLOWS),
  ...gen(a => [`overflow-y-${a}`, `overflow-y: ${a}`], OVERFLOWS),
  // Layout - overscroll-behavior
  ...gen(a => [`overscroll-${a}`, `overscroll-behavior: ${a}`], OVERSCROLLS),
  ...gen(a => [`overscroll-x-${a}`, `overscroll-behavior-x: ${a}`], OVERSCROLLS),
  ...gen(a => [`overscroll-y-${a}`, `overscroll-behavior-y: ${a}`], OVERSCROLLS),
  // Layout - scrollbar-gutter
  ...gen(
    (a, b) => [`scrollbar-${a}`, `scrollbar-gutter: ${b}`],
    ['auto', 'stable', ['both', 'stable both-edges']]
  ),
  // Layout - position
  ...gen(
    a => [`${a}`, `position: ${a}`],
    ['static', 'fixed', 'absolute', 'relative', 'sticky']
  ),
  // Layout - top / right / bottom / left
  ['inset-', { css: '{ inset: $ }', ...UNIT_ALL }],
  ['inset-x-', { css: '{ inset-inline: $ }', ...UNIT_ALL }],
  ['inset-y-', { css: '{ inset-block: $ }', ...UNIT_ALL }],
  ['start-', { css: '{ inset-inline-start: $ }', ...UNIT_ALL }],
  ['end-', { css: '{ inset-inline-end: $ }', ...UNIT_ALL }],
  ['top-', { css: '{ top: $ }', ...UNIT_ALL }],
  ['right-', { css: '{ right: $ }', ...UNIT_ALL }],
  ['bottom-', { css: '{ bottom: $ }', ...UNIT_ALL }],
  ['left-', { css: '{ left: $ }', ...UNIT_ALL }],
  // Layout - visibility
  ...gen(
    (a, b) => [a, `visibility: ${b}`],
    ['visible', ['invisible', 'hidden'], 'collapse']
  ),
  // Layout - z-index
  ['z-auto', '{ z-index: auto }'],
  ['z-', { css: '{ z-index: $ }', number: '$' }],
  // ---------------------------------------------------------------------------
  // Flexbox & Grid - flex-basis
  ['basis-', { css: '{ flex-basis: $ }', ...UNIT_ALL }],
  // Flexbox & Grid - flex-direction
  ...gen(
    (a, b) => [`flex-${a}`, `flex-direction: ${b}`],
    ['row', 'row-reverse', ['col', 'column'], ['col-reverse', 'column-reverse']]
  ),
  // Flexbox & Grid - flex-wrap
  ...gen(
    a => [`flex-${a}`, `flex-wrap: ${a}`],
    ['nowrap', 'wrap', 'wrap-reverse']
  ),
  // Flexbox & Grid - flex
  ['flex-auto', '{ flex: 1 1 auto }'],
  ['flex-initial', '{ flex: 0 1 auto }'],
  ['flex-none', '{ flex: none }'],
  ['flex-', { css: '{ flex: $ }', number: '$', ...UNIT_FRACTION }],
  // Flexbox & Grid - flex-grow
  ['grow', '{ flex-grow: 1 }'],
  ['grow-', { css: '{ flex-grow: $ }', number: '$' }],
  // Flexbox & Grid - flex-shrink
  ['shrink', '{ flex-shrink: 1 }'],
  ['shrink-', { css: '{ flex-shrink: $ }', number: '$' }],
  // Flexbox & Grid - order
  ['order-first', '{ order: -9999 }'],
  ['order-last', '{ order: 9999 }'],
  ['order-none', '{ order: 0 }'],
  ['order-', { css: '{ order: $ }', number: '$' }],
  // Flexbox & Grid - grid-template-columns
  ['grid-cols-none', '{ grid-template-columns: none }'],
  ['grid-cols-subgrid', '{ grid-template-columns: subgrid }'],
  ['grid-cols-', { css: '{ grid-template-columns: $ }', number: 'repeat($, minmax(0, 1fr))' }],
  // Flexbox & Grid - grid-column
  ['col-span-full', '{ grid-column: 1 / -1 }'],
  ['col-span-', { css: '{ grid-column: span $ / span $ }', number: '$' }],
  ['col-start-auto', '{ grid-column-start: auto }'],
  ['col-start-', { css: '{ grid-column-start: $ }', number: '$' }],
  ['col-end-auto', '{ grid-column-end: auto }'],
  ['col-end-', { css: '{ grid-column-end: $ }', number: '$' }],
  ['col-auto', '{ grid-column: auto }'],
  ['col-', { css: '{ grid-column: $ }', number: '$' }],
  // Flexbox & Grid - grid-template-rows
  ['grid-rows-none', '{ grid-template-rows: none }'],
  ['grid-rows-subgrid', '{ grid-template-rows: subgrid }'],
  ['grid-rows-', { css: '{ grid-template-rows: $ }', number: 'repeat($, minmax(0, 1fr))' }],
  // Flexbox & Grid - grid-row
  ['row-span-full', '{ grid-row: 1 / -1 }'],
  ['row-span-', { css: '{ grid-row: span $ / span $ }', number: '$' }],
  ['row-start-auto', '{ grid-row-start: auto }'],
  ['row-start-', { css: '{ grid-row-start: $ }', number: '$' }],
  ['row-end-auto', '{ grid-row-end: auto }'],
  ['row-end-', { css: '{ grid-row-end: $ }', number: '$' }],
  ['row-auto', '{ grid-row: auto }'],
  ['row-', { css: '{ grid-row: $ }', number: '$' }],
  // Flexbox & Grid - grid-auto-flow
  ...gen(
    (a, b) => [`grid-flow-${a}`, `grid-auto-flow: ${b}`],
    ['row', ['col', 'column'], 'dense', ['row-dense', 'row dense'], ['col-dense', 'column dense']]
  ),
  // Flexbox & Grid - grid-auto-columns
  ...gen(
    (a, b) => [`auto-cols-${a}`, `grid-auto-columns: ${b}`],
    ['auto', ['min', 'min-content'], ['max', 'max-content'], ['fr', 'minmax(0, 1fr)']]
  ),
  ['auto-cols-', { css: '{ grid-auto-columns: $ }' }],
  // Flexbox & Grid - grid-auto-rows
  ...gen(
    (a, b) => [`auto-rows-${a}`, `grid-auto-rows: ${b}`],
    ['auto', ['min', 'min-content'], ['max', 'max-content'], ['fr', 'minmax(0, 1fr)']]
  ),
  ['auto-rows-', { css: '{ grid-auto-rows: $ }' }],
  // Flexbox & Grid - gap
  ['gap-', { css: '{ gap: $ }', ...UNIT_NUMBER }],
  ['gap-x-', { css: '{ column-gap: $ }', ...UNIT_NUMBER }],
  ['gap-y-', { css: '{ row-gap: $ }', ...UNIT_NUMBER }],
  // Flexbox & Grid - justify-content
  ...gen(
    (a, b) => [`justify-${a}`, `justify-content: ${b}`],
    [['start', 'flex-start'], ['end', 'flex-end'], 'center', ['between', 'space-between'], ['around', 'space-around'], ['evenly', 'space-evenly'], 'stretch', 'normal']
  ),
  // Flexbox & Grid - justify-items
  ...gen(
    a => [`justify-items-${a}`, `justify-items: ${a}`],
    ['start', 'end', 'center', 'stretch', 'normal']
  ),
  // Flexbox & Grid - justify-self
  ...gen(
    a => [`justify-self-${a}`, `justify-self: ${a}`],
    ['auto', 'start', 'end', 'center', 'stretch']
  ),
  // Flexbox & Grid - align-content
  ...gen(
    (a, b) => [`content-${a}`, `align-content: ${b}`],
    ['normal', 'center', ['start', 'flex-start'], ['end', 'flex-end'], ['between', 'space-between'], ['around', 'space-around'], ['evenly', 'space-evenly'], 'baseline', 'stretch']
  ),
  // Flexbox & Grid - align-items
  ...gen(
    (a, b) => [`items-${a}`, `align-items: ${b}`],
    [['start', 'flex-start'], ['end', 'flex-end'], ['end-safe', 'safe flex-end'], 'center', ['center-safe', 'safe center'], 'baseline', ['baseline-last', 'last baseline'], 'stretch']
  ),
  // Flexbox & Grid - align-self
  ...gen(
    (a, b) => [`self-${a}`, `align-self: ${b}`],
    ['auto', ['start', 'flex-start'], ['end', 'flex-end'], 'center', 'stretch', 'baseline']
  ),
  // Flexbox & Grid - place-content
  ...gen(
    (a, b) => [`place-content-${a}`, `place-content: ${b}`],
    ['center', ['start', 'flex-start'], ['end', 'flex-end'], ['between', 'space-between'], ['around', 'space-around'], ['evenly', 'space-evenly'], 'baseline', 'stretch']
  ),
  // Flexbox & Grid - place-items
  ...gen(
    a => [`place-items-${a}`, `place-items: ${a}`],
    ['start', 'end', 'center', 'baseline', 'stretch']
  ),
  // Flexbox & Grid - place-self
  ...gen(
    a => [`place-self-${a}`, `place-self: ${a}`],
    ['auto', 'start', 'end', 'center', 'stretch']
  ),
  // ---------------------------------------------------------------------------
  // Spacing - padding
  ['p-', { css: '{ padding: $ }', ...UNIT_NUMBER, string: '$' }],
  ['px-', { css: '{ padding-inline: $ }', ...UNIT_NUMBER, string: '$' }],
  ['py-', { css: '{ padding-block: $ }', ...UNIT_NUMBER, string: '$' }],
  ['ps-', { css: '{ padding-inline-start: $ }', ...UNIT_NUMBER, string: '$' }],
  ['pe-', { css: '{ padding-inline-end: $ }', ...UNIT_NUMBER, string: '$' }],
  ['pt-', { css: '{ padding-top: $ }', ...UNIT_NUMBER, string: '$' }],
  ['pr-', { css: '{ padding-right: $ }', ...UNIT_NUMBER, string: '$' }],
  ['pb-', { css: '{ padding-bottom: $ }', ...UNIT_NUMBER, string: '$' }],
  ['pl-', { css: '{ padding-left: $ }', ...UNIT_NUMBER, string: '$' }],
  // Spacing - margin
  ['m-', { css: '{ margin: $ }', ...UNIT_NUMBER, string: '$' }],
  ['mx-', { css: '{ margin-inline: $ }', ...UNIT_NUMBER, string: '$' }],
  ['my-', { css: '{ margin-block: $ }', ...UNIT_NUMBER, string: '$' }],
  ['ms-', { css: '{ margin-inline-start: $ }', ...UNIT_NUMBER, string: '$' }],
  ['me-', { css: '{ margin-inline-end: $ }', ...UNIT_NUMBER, string: '$' }],
  ['mt-', { css: '{ margin-top: $ }', ...UNIT_NUMBER, string: '$' }],
  ['mr-', { css: '{ margin-right: $ }', ...UNIT_NUMBER, string: '$' }],
  ['mb-', { css: '{ margin-bottom: $ }', ...UNIT_NUMBER, string: '$' }],
  ['ml-', { css: '{ margin-left: $ }', ...UNIT_NUMBER, string: '$' }],
  ['space-x-', { css: ' > :not(:last-child) { margin-inline-end: $ }', ...UNIT_NUMBER, string: '$' }],
  ['space-y-', { css: ' > :not(:last-child) { margin-bottom: $ }', ...UNIT_NUMBER, string: '$' }],
  // Sizing - width
  ['w-', { css: '{ width: $ }', ...UNIT_ALL }],
  // Sizing - min-width
  ['min-w-', { css: '{ min-width: $ }', ...UNIT_ALL }],
  // Sizing - max-width
  ['max-w-', { css: '{ max-width: $ }', ...UNIT_ALL }],
  // Sizing - height
  ['h-', { css: '{ height: $ }', ...UNIT_ALL }],
  // Sizing - min-height
  ['min-h-', { css: '{ min-height: $ }', ...UNIT_ALL }],
  // Sizing - max-height
  ['max-h-', { css: '{ max-height: $ }', ...UNIT_ALL }],
  // ---------------------------------------------------------------------------
  // Typography - font-family
  [
    'font-sans',
    '{ font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" }',
  ],
  ['font-serif', '{ font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif }'],
  [
    'font-mono',
    '{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace }',
  ],
  ['font-', { css: '{ font-family: $ }' }],
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
  ...gen(
    (a, b) => [`font-${a}`, `font-weight: ${b}`],
    [['thin', 100], ['extralight', 200], ['light', 300], ['normal', 400], ['medium', 500], ['semibold', 600], ['bold', 700], ['extrabold', 800], ['black', 900]]
  ),
  // Tpyography - font-stretch
  ...gen(
    a => [`font-stretch-${a}`, `font-stretch: ${a}`],
    ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded']
  ),
  // Typography - font-variant-numeric
  ...gen(
    (a, b) => [a, `font-variant-numeric: ${b}`],
    [['normal-nums', 'normal'], 'ordinal', 'slashed-zero', 'lining-nums', 'oldstyle-nums', 'proportional-nums', 'tabular-nums', 'diagonal-fractions', 'stacked-fractions']
  ),
  // Typography - letter-spacing
  ...gen(
    (a, b) => [`tracking-${a}`, `letter-spacing: ${b}`],
    [['tighter', '-0.05em'], ['tight', '-0.025em'], ['normal', '0px'], ['wide', '0.025em'], ['wider', '0.05em'], ['widest', '0.1em']]
  ),
  ['tracking-', { css: '{ letter-spacing: $ }' }],
  // Typography - line-clamp
  [
    'line-clamp-none',
    '{ -webkit-line-clamp: none; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical }'
  ],
  [
    'line-clamp-',
    { css: '{ -webkit-line-clamp: $; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical }' }
  ],
  // Typography - line-height
  ...gen(
    (a, b) => [`leading-${a}`, `line-height: ${b}`],
    [['none', 1], ['tight', 1.25], ['snug', 1.375], ['normal', 1.5], ['relaxed', 1.625], ['loose', 2]]
  ),

  // Typography - list-style-image
  ['list-image-none', '{ list-style-image: none }'],
  ['list-image-', { css: '{ list-style-image: $ }' }],
  // Typography - list-style-position
  ...gen(a => [`list-${a}`, `list-style-position: ${a}`],
    ['inside', 'outside']
  ),
  // Typography - list-style-type
  ...gen(
    a => [`list-${a}`, `list-style-type: ${a}`],
    ['disc', 'decimal', 'none']
  ),
  ['list-', { css: '{ list-style-type: $ }' }],
  // Typography - text-align
  ...gen(
    a => [`text-${a}`, `text-align: ${a}`],
    ['left', 'center', 'right', 'justify', 'start', 'end']
  ),
  // Typography - text-color
  ...genc('text', 'color'),
  // Typography - text-decoration-line
  ...gen(
    (a, b) => [a, `text-decoration-line: ${b}`],
    ['underline', 'overline', 'line-through', ['no-underline', 'none']]
  ),
  // Typography - text-decoration-color
  ...genc('decoration', 'text-decoration-color'),
  // Typography = text-decoration-style
  ...gen(
    (a, b) => [`decoration-${a}`, `text-decoration-style: ${b}`],
    ['solid', 'double', 'dotted', 'dashed', 'wavy']
  ),
  // Typography - text-decoration-thickness
  ...gen(
    a => [`decoration-${a}`, `text-decoration-thickness: ${a}`],
    ['auto', 'from-font']
  ),
  ['decoration-', { css: '{ text-decoration-thickness: $ }', number: '$px' }],
  // Typography - text-underline-offset
  ['underline-offset-auto', '{ text-underline-offset: auto }'],
  ['underline-offset-', { css: '{ text-underline-offset: $ }', number: '$px' }],
  // Typography - text-transform
  ...gen(
    (a, b) => [`${a}`, `text-transform: ${b}`],
    ['uppercase', 'lowercase', 'capitalize', ['normal-case', 'none']]
  ),
  // Typography - text-overflow
  ['truncate', '{ text-overflow: ellipsis; overflow: hidden; white-space: nowrap }'],
  ['overflow-ellipsis', '{ text-overflow: ellipsis }'],
  ['overflow-clip', '{ text-overflow: clip }'],
  // Typography - text-wrap
  ...gen(
    (a, b) => [`text-${a}`, `text-wrap: ${b}`],
    ['wrap', 'nowrap', 'balance', 'pretty']
  ),
  // Typography - text-indent
  ['indent-px', '{ text-indent: 1px }'],
  ['-indent-px', '{ text-indent: -1px }'],
  ['indent-', { css: '{ text-indent: $ }', ...UNIT_NUMBER }],
  // Typography - vertical-align
  ...gen(
    a => [`align-${a}`, `vertical-align: ${a}`],
    ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super']
  ),
  ['align-', { css: '{ vertical-align: $ }' }],
  // Typography - white-space
  ...gen(
    a => [`whitespace-${a}`, `white-space: ${a}`],
    ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
  ),
  // Typography - word-break
  ...gen(
    (a, b) => [`break-${a}`, `word-break: ${b}`],
    ['normal', ['all', 'break-all'], ['keep', 'keep-all']]
  ),
  // Typography - overflow-wrap
  ...gen(
    a => [`wrap-${a}`, `overflow-wrap: ${a}`],
    ['break-word', 'anywhere', 'normal']
  ),
  // Typography - hyphens
  ...gen(
    a => [`hyphens-${a}`, `hyphens: ${a}`],
    ['none', 'manual', 'auto']
  ),
  // Typography - content
  ['content-none', '{ content: none }'],
  ['content-', { css: '{ content: $ }' }],
  // ---------------------------------------------------------------------------
  // Backgrounds - background-attachment
  ...gen(a => [`bg-${a}`, `background-attachment: ${a}`],
    ['fixed', 'local', 'scroll']
  ),
  // Backgrounds - background-clip
  ...gen(
    (a, b) => [`bg-clip-${a}`, `background-clip: ${b}`],
    [['border', 'border-box'], ['padding', 'padding-box'], ['content', 'content-box'], 'text']
  ),
  // Backgrounds - background-color'
  ...genc('bg', 'background-color'),
  // Backgrounds - background-image
  ['bg-none', '{ background-image: none }'],
  ['bg-', { css: '{ background-image: $ }' }],
  // Backgrounds - background-origin
  ...gen(
    a => [`bg-${a}`, `background-origin: ${a}`],
    ['border-box', 'padding-box', 'content-box']
  ),
  // Backgrounds - background-position
  ...gen(
    a => [`bg-${a.replace(' ', '-')}`, `background-position: ${a}`],
    ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top']
  ),
  ['bg-position-', { css: '{ background-position: $ }' }],
  // Backgrounds - background-repeat
  ...gen(
    a => [`bg-${a}`, `background-repeat: ${a}`],
    ['repeat', 'repeat-x', 'repeat-y', 'space', 'round', 'no-repeat']
  ),
  // Backgrounds - background-size
  ...gen(
    a => [`bg-${a}`, `background-size: ${a}`],
    ['auto', 'cover', 'contain']
  ),
  ['bg-size-', { css: '{ background-size: $ }' }],
  // ---------------------------------------------------------------------------
  // Borders - border-radius
  ...gen((a, b) => [`rounded${a}`, `border-radius: ${b}`], RADII),
  ['rounded-', { css: '{ border-radius: $ }' }],
  ...gen((a, b) => [`rounded-ss${a}`, `border-start-start-radius: ${b}`], RADII),
  ['rounded-ss-', { css: '{ border-start-start-radius: $ }' }],
  ...gen((a, b) => [`rounded-se${a}`, `border-start-end-radius: ${b}`], RADII),
  ['rounded-se-', { css: '{ border-start-end-radius: $ }' }],
  ...gen((a, b) => [`rounded-ee${a}`, `border-end-end-radius: ${b}`], RADII),
  ['rounded-ee-', { css: '{ border-end-end-radius: $ }' }],
  ...gen((a, b) => [`rounded-es${a}`, `border-end-start-radius: ${b}`], RADII),
  ['rounded-es-', { css: '{ border-end-start-radius: $ }' }],
  ...gen((a, b) => [`rounded-tl${a}`, `border-top-left-radius: ${b}`], RADII),
  ['rounded-tl-', { css: '{ border-top-left-radius: $ }' }],
  ...gen((a, b) => [`rounded-tr${a}`, `border-top-right-radius: ${b}`], RADII),
  ['rounded-tr-', { css: '{ border-top-right-radius: $ }' }],
  ...gen((a, b) => [`rounded-br${a}`, `border-bottom-right-radius: ${b}`], RADII),
  ['rounded-br-', { css: '{ border-bottom-right-radius: $ }' }],
  ...gen((a, b) => [`rounded-bl${a}`, `border-bottom-left-radius: ${b}`], RADII),
  ['rounded-bl-', { css: '{ border-bottom-left-radius: $ }' }],
  // Borders - border-width
  ['border', '{ border-width: 1px }'],
  ['border-', { css: '{ border-width: $ }', number: '$px' }],
  ['border-x', '{ border-inline-width: 1px }'],
  ['border-x-', { css: '{ border-inline-width: $ }', number: '$px' }],
  ['border-y', '{ border-block-width: 1px }'],
  ['border-y-', { css: '{ border-block-width: $ }', number: '$px' }],
  ['border-s', '{ border-inline-start-width: 1px }'],
  ['border-s-', { css: '{ border-inline-start-width: $ }', number: '$px' }],
  ['border-e', '{ border-inline-end-width: 1px }'],
  ['border-e-', { css: '{ border-inline-end-width: $ }', number: '$px' }],
  ['border-t', '{ border-top-width: 1px }'],
  ['border-t-', { css: '{ border-top-width: $ }', number: '$px' }],
  ['border-r', '{ border-right-width: 1px }'],
  ['border-r-', { css: '{ border-right-width: $ }', number: '$px' }],
  ['border-b', '{ border-bottom-width: 1px }'],
  ['border-b-', { css: '{ border-bottom-width: $ }', number: '$px' }],
  ['border-l', '{ border-left-width: 1px }'],
  ['border-l-', { css: '{ border-left-width: $ }', number: '$px' }],
  // Borders - border-color
  ...genc('border', 'border-color'),
  // Borders - Border-style
  ...gen(
    a => [`border-${a}`, `border-style: ${a}`],
    ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none']
  ),
  // Borders - outline-width
  ['outline', '{ outline-width: 1px }'],
  ['outline-', { css: '{ outline-width: $ }', number: '$px' }],
  // Borders - outline-color
  ...genc('outline', 'outline-color'),
  // Borders - outline-style
  ...gen(
    a => [`outline-${a}`, `outline-style: ${a}`],
    ['solid', 'dashed', 'dotted', 'double', 'none']
  ),
  // Borders - outline-offset
  ['outline-offset-', { css: '{ outline-offset: $ }', number: '$px' }],
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
  ['shadow-none', '{ box-shadow: 0 0 rgb(0 0 0 / 0) }'],
  ['shadow-', { css: '{ box-shadow: $ }' }],
  // Effects - text-shadow
  ['text-shadow-2xs', '{ text-shadow: 0px 1px 0px rgb(0 0 0 / 0.15) }'],
  ['text-shadow-xs', '{ text-shadow: 0px 1px 1px rgb(0 0 0 / 0.2) }'],
  [
    'text-shadow-sm',
    '{ text-shadow: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075) }',
  ],
  [
    'text-shadow-md',
    '{ text-shadow: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1) }',
  ],
  [
    'text-shadow-lg',
    '{ text-shadow: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1) }',
  ],
  ['text-shadow-none', '{ text-shadow: none }'],
  ['text-shadow-', { css: '{ text-shadow: $ }' }],
  // Effects - opacity
  ['opacity-', { css: '{ opacity: $ }', number: '$%' }],
  // Effects - mix-blend-mode
  ...gen(a => [`mix-blend-${a}`, `mix-blend-mode: ${a}`], BLEND_MODES),
  // Effects - background-blend-mode
  ...gen(a => [`bg-blend-${a}`, `background-blend-mode: ${a}`], BLEND_MODES),
  // Effects - mask-clip
  ...gen(
    a => [`mask-clip-${a}`, `mask-clip: ${a}-box`],
    ['border', 'padding', 'content', 'fill', 'stroke', 'view']
  ),
  ['mask-no-clip', '{ mask-clip: no-clip }'],
  // Effects - mask-composite
  ...gen(
    a => [`mask-${a}`, `mask-composite: ${a}`],
    ['add', 'subtract', 'intersect', 'exclude']
  ),
  // Effects - mask-image
  ['mask-none', '{ mask-image: none }'],
  ['mask-image-', { css: '{ mask-image: $ }' }],
  // Effects - mask-mode
  ...gen(
    (a, b) => [`mask-${a}`, `mask-mode: ${b}`],
    ['alpha', 'luminance', ['match', 'match-source']]
  ),
  // Effects - mask-origin
  ...gen(
    a => [`mask-origin-${a}`, `mask-origin: ${a}-box`],
    ['border', 'padding', 'content', 'fill', 'stroke', 'view']
  ),
  // Effects - mask-position
  ...gen(
    a => [`mask-${a.replace(' ', '-')}`, `mask-position: ${a}`],
    ['top left', 'top', 'top right', 'left', 'center', 'right', 'bottom left', 'bottom', 'bottom right']
  ),
  ['mask-position-', { css: '{ mask-position: $ }' }],
  // Effects - mask-repeat
  ...gen(
    (a, b) => [`mask-${a}`, `mask-repeat: ${b}`],
    ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', ['repeat-space', 'space'], ['repeat-round', 'round']]
  ),
  // Effects - mask-size
  ...gen(
    a => [`mask-${a}`, `mask-size: ${a}`],
    ['auto', 'cover', 'contain']
  ),
  ['mask-size-', { css: '{ mask-size: $ }' }],
  // Effects - mask-type
  ...gen(
    a => [`mask-type-${a}`, `mask-type: ${a}`],
    ['alpha', 'luminance']
  ),
  // ---------------------------------------------------------------------------
  // Filters - blur
  ...backdrop(
    gen(
      (a, b) => [`blur-${a}`, `filter: ${b}`],
      [['xs', 'blur(4px)'], ['sm', 'blur(8px)'], ['md', 'blur(12px)'], ['lg', 'blur(16px)'], ['xl', 'blur(24px)'], ['2xl', 'blur(40px)'], ['3xl', 'blur(64px)'], ['none', 'none']]
    )
  ),
  ...backdrop(['blur-', { css: '{ filter: blur($) }' }]),
  // Filters - brightness
  ...backdrop(['brightness-', { css: '{ filter: brightness($) }' }]),
  // Filters - contrast
  ...backdrop(['contrast-', { css: '{ filter: contrast($) }' }]),
  // Filters - drop-shadow
  ['drop-shadow-xs', '{ filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }'],
  ['drop-shadow-sm', '{ filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }'],
  ['drop-shadow-md', '{ filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }'],
  ['drop-shadow-lg', '{ filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }'],
  ['drop-shadow-xl', '{ filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }'],
  ['drop-shadow-2xl', '{ filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }'],
  ['drop-shadow-none', '{ filter: drop-shadow(0 0 rgba(0, 0, 0, 0)) }'],
  ['drop-shadow-', { css: '{ filter: drop-shadow($) }' }],
  // Filters - grayscale
  ...backdrop(['grayscale', '{ filter: grayscale(100%) }']),
  ...backdrop(['grayscale-', { css: '{ filter: grayscale($) }', number: '$%' }]),
  // Filters - hue-rotate
  ...backdrop(['hue-rotate-', { css: '{ filter: hue-rotate($) }' }]),
  // Filters - invert
  ...backdrop(['invert-', { css: '{ filter: invert($) }' }]),
  // Filters - opacity
  ['backdrop-opacity-', { css: '{ backdrop-filter: opacity($) }' }],
  // Filters - saturate
  ...backdrop(['saturate-', { css: '{ filter: saturate($) }' }]),
  // Filters - sepia
  ...backdrop(['sepia', '{ filter: sepia(100%) }']),
  ...backdrop(['sepia-', { css: '{ filter: sepia($) }' }]),
  // Disable filter.
  ...backdrop(['filter-none', '{ filter: none }']),
  ...backdrop(['filter-', { css: '{ filter: $ }' }]),
  // ---------------------------------------------------------------------------
  // Tables - border-collapse
  ...gen(
    a => [`border-${a}`, `border-collapse: ${a}`],
    ['collapse', 'separate']
  ),
  // Tables - border-spacing
  ['border-spacing-', { css: '{ border-spacing: $ }', ...UNIT_NUMBER }],
  ['border-spacing-x-', { css: '{ border-spacing: $ 0 }', ...UNIT_NUMBER }],
  ['border-spacing-y-', { css: '{ border-spacing: 0 $ }', ...UNIT_NUMBER }],
  // Tables - table-layout
  ...gen(
    a => [`table-${a}`, `table-layout: ${a}`],
    ['auto', 'fixed']
  ),
  // Tables - caption-side
  ...gen(
    a => [`caption-${a}`, `caption-side: ${a}`],
    ['top', 'bottom']
  ),
  // ---------------------------------------------------------------------------
  // Transitions & Animations - transition-property
  [
    'transition',
    `{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-duration: ${ANIM_TIME} }`,
  ],
  ['transition-all', '{ transition-property: all }'],
  [
    'transition-colors',
    `{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: ${ANIM_TIME} }`,
  ],
  ...gen(
    (a, b) => [`transition-${a}`, `transition-property: ${b}`],
    ['opacity', ['shadow', 'box-shadow'], 'transform', 'none']
  ),
  ['transition-', { css: '{ transition-property: $ }' }],
  // Transitions & Animations - transition-behavior
  ['transition-normal', '{ transition-behavior: normal }'],
  ['transition-discrete', '{ transition-behavior: allow-discrete }'],
  // Transitions & Animations - transition-duration
  ['duration-initial', '{ transition-duration: initial }'],
  ['duration-', { css: '{ transition-duration: $ }', number: '$ms' }],
  // Transitions & Animations - transition-timing-function
  ...gen(
    (a, b) => [`ease-${a}`, `transition-timing-function: ${b}`],
    ['linear', ['in', 'ease-in'], ['out', 'ease-out'], ['in-out', 'ease-in-out'], 'initial']
  ),
  ['ease-', { css: '{ transition-timing-function: $ }' }],
  // Transitions & Animations - transition-delay
  ['delay-', { css: '{ transition-delay: $ }', number: '$ms' }],
  // Transitions & Animations - animation
  ['animate-expand', `{ animation: expand ${ANIM_TIME} ease-in-out }`],
  ['animate-toast', `{ animation: toast ${ANIM_TIME} ease-in-out }`],
  ['animate-fade', `{ animation: fade ${ANIM_TIME} ease-in-out }`],
  ['animate-none', '{ animation: none }'],
  ['animate-', { css: '{ animation: $ }' }],
  // ---------------------------------------------------------------------------
  // Transforms - backface-visibility
  ...gen(
    a => [`backface-${a}`, `backface-visibility: ${a}`],
    ['visible', 'hidden']
  ),
  // Transforms - perspective
  ...gen(
    (a, b) => [`perspective-${a}`, `perspective: ${b}`],
    [['dramatic', '100px'], ['near', '300px'], ['normal', '500px'], ['midrange', '800px'], ['distant', '1200px'], 'none']
  ),
  ['perspective-', { css: '{ perspective: $ }' }],
  // Transforms - perspective-origin
  ...gen(a => [`perspective-origin-${a}`, `perspective-origin: ${a.replace('-', ' ')}`], ORIGINS),
  ['perspective-origin-', { css: '{ perspective-origin: $ }' }],
  // Transforms - rotate
  ['rotate-none', '{ rotate: none }'],
  ['rotate-', { css: '{ rotate: $ }', number: '$deg' }],
  // Transforms - scale
  ['scale-', { css: '{ scale: $ }', number: '$% $%' }],
  ['scale-x-', { css: '{ scale: $ }', number: '$% 100%' }],
  ['scale-y-', { css: '{ scale: $ }', number: '100% $%' }],
  // Transforms - skew
  ['skew-', { css: '{ transform: skewX($) skewY($) }' }],
  ['skew-x-', { css: '{ transform: skewX($) }' }],
  ['skew-y-', { css: '{ transform: skewY($) }' }],
  // Transforms - transform
  ['transform-none', '{ transform: none }'],
  ['transform-', { css: '{ transform: $ }' }],
  // Transforms - transform-origin
  ...gen(a => [`origin-${a}`, `transform-origin: ${a.replace('-', ' ')}`], ORIGINS),
  ['origin-', { css: '{ transform-origin: $ }' }],
  // Transforms - transform-style
  ['transform-3d', '{ transform-style: preserve-3d }'],
  ['transform-flat', '{ transform-style: flat }'],
  // Transforms - translate
  ['translate-', {
    css: '{ translate: $ }',
    number: `${UNIT_NUMBER.number} ${UNIT_NUMBER.number}`,
    fraction: `${UNIT_FRACTION.fraction} ${UNIT_FRACTION.fraction}`,
    string: '$ $'
  }],
  ['translate-x-', { css: '{ translate: $ 0 }', ...UNIT_NUMBER, string: '$' }],
  ['translate-y-', { css: '{ translate: 0 $ }', ...UNIT_NUMBER, string: '$' }],
  // ---------------------------------------------------------------------------
  // Interactivity - accent-color
  ...genc('accent', 'accent-color'),
  // Interactivity - appearance
  ['appearance-none', '{ appearance: none }'],
  ['appearance-auto', '{ appearance: auto }'],
  // Interactivity - caret-color
  ...genc('caret', 'caret-color'),
  // Interactivity - color-scheme
  ...gen(
    a => [`scheme-${a.replace(' ', '-')}`, `color-scheme: ${a}`],
    ['normal', 'dark', 'light', 'light dark', 'only dark', 'only light']
  ),
  // Interactivity - cursor
  ...gen(
    a => [`cursor-${a}`, `cursor: ${a}`],
    ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed']
  ),
  // Interactivity - field-sizing
  ['field-sizing-fixed', '{ field-sizing: fixed }'],
  ['field-sizing-content', '{ field-sizing: content }'],
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
  ['scroll-m-', { css: '{ scroll-margin: $ }', ...UNIT_NUMBER }],
  ['scroll-mx-', { css: '{ scroll-margin-inline: $ }', ...UNIT_NUMBER }],
  ['scroll-my-', { css: '{ scroll-margin-block: $ }', ...UNIT_NUMBER }],
  ['scroll-ms-', { css: '{ scroll-margin-inline-start: $ }', ...UNIT_NUMBER }],
  ['scroll-me-', { css: '{ scroll-margin-inline-end: $ }', ...UNIT_NUMBER }],
  ['scroll-mt-', { css: '{ scroll-margin-top: $ }', ...UNIT_NUMBER }],
  ['scroll-mr-', { css: '{ scroll-margin-right: $ }', ...UNIT_NUMBER }],
  ['scroll-mb-', { css: '{ scroll-margin-bottom: $ }', ...UNIT_NUMBER }],
  ['scroll-ml-', { css: '{ scroll-margin-left: $ }', ...UNIT_NUMBER }],
  // Interactivity - scroll-padding
  ['scroll-p-', { css: '{ scroll-padding: $ }', ...UNIT_NUMBER }],
  ['scroll-px-', { css: '{ scroll-padding-inline: $ }', ...UNIT_NUMBER }],
  ['scroll-py-', { css: '{ scroll-padding-block: $ }', ...UNIT_NUMBER }],
  ['scroll-ps-', { css: '{ scroll-padding-inline-start: $ }', ...UNIT_NUMBER }],
  ['scroll-pe-', { css: '{ scroll-padding-inline-end: $ }', ...UNIT_NUMBER }],
  ['scroll-pt-', { css: '{ scroll-padding-top: $ }', ...UNIT_NUMBER }],
  ['scroll-pr-', { css: '{ scroll-padding-right: $ }', ...UNIT_NUMBER }],
  ['scroll-pb-', { css: '{ scroll-padding-bottom: $ }', ...UNIT_NUMBER }],
  ['scroll-pl-', { css: '{ scroll-padding-left: $ }', ...UNIT_NUMBER }],
  // Interactivity - scroll-snap-align
  ...gen(
    a => [`snap-${a}`, `scroll-snap-align: ${a}`],
    ['start', 'end', 'center']
  ),
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
  ...gen(
    a => [`touch-${a}`, `touch-action: ${a}`],
    ['auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation']
  ),
  // Interactivity - user-select
  ...gen(
    a => [`select-${a}`, `user-select: ${a}`],
    ['text', 'all', 'auto', 'none']
  ),
  // Interactivity - will-change
  ...gen(
    (a, b) => [`will-change-${a}`, `will-change: ${b}`],
    ['auto', ['scroll', 'scroll-position'], 'contents', 'transform']
  ),
  ['will-change-', { css: '{ will-change: $ }' }],
  // ---------------------------------------------------------------------------
  // SVG - fill
  ...genc('fill', 'fill'),
  // SVG - stroke
  ...genc('stroke', 'stroke'),
  // SVG - stroke-width
  ['stroke-', { css: '{ stroke-width: $ }', number: '$px' }],
  // ---------------------------------------------------------------------------
  // Accessibility - forced-color-adjust
  ...gen(
    a => [`forced-color-adjust-${a}`, `forced-color-adjust: ${a}`],
    ['auto', 'none']
  )
])
