import { ANIM_TIME, BLEND_MODES, ORIGINS, RADII } from './constants.js'
import { backdrop, gen, genc } from './generators.js'

const UNIT_NUMBER = { number: 'calc($ * 4px)' }
const UNIT_FRACTION = { fraction: 'calc($ * 100%)' }
const UNIT_ALL = { ...UNIT_NUMBER, ...UNIT_FRACTION, string: '$' }

// Tries to follow Tailwind's order.
export const UTILS = new Map([
  // ---------------------------------------------------------------------------
  ['@container', '{ container-type: inline-size }'],
  // Layout - aspect-ratio
  ['aspect-square', '{ aspect-ratio: 1 / 1 }'],
  ['aspect-video', '{ aspect-ratio: 16 / 9 }'],
  ['aspect-auto', '{ aspect-ratio: auto }'],
  ['aspect-', { css: '{ aspect-ratio: $ }', fraction: '$' }],
  // Layout - columns
  ['columns-', { css: '{ columns: $ }', number: '$', string: '$' }],
  // Layout - break-after
  ...gen(
    ii => [`break-after-${ii}`, `break-after: ${ii}`],
    ['auto', 'avoid', 'avoid-page', 'page', 'left', 'right', 'column']
  ),
  // Layout - break-before
  ...gen(
    ii => [`break-before-${ii}`, `break-before: ${ii}`],
    ['auto', 'avoid', 'avoid-page', 'page', 'left', 'right', 'column']
  ),
  // Layout - break-inside
  ...gen(ii => [`break-inside-${ii}`, `break-inside: ${ii}`], ['auto', 'avoid', 'avoid-page', 'avoid-column']),
  // Layout - box-decoration-break
  ...gen(ii => [`box-decoration-${ii}`, `box-decoration-break: ${ii}`], ['clone', 'slice']),
  // Layout - box-sizing
  ...gen(ii => [`box-${ii}`, `box-sizing: ${ii}-box`], ['border', 'content']),
  // Layout - display
  ...gen(
    ii => [`${ii}`, `display: ${ii}`],
    [
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
    ]
  ),
  ['hidden', '{ display: none }'],
  [
    'sr-only',
    '{ clip: rect(0, 0, 0, 0); position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; white-space: nowrap; border-width: 0 }',
  ],
  [
    'not-sr-only',
    '{ clip: auto; position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; white-space: normal }',
  ],
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
  ...gen(
    ii => [`object-${ii.replace(/ /g, '-')}`, `object-position: ${ii}`],
    ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top']
  ),
  ['object-', { css: '{ object-position: $ }' }],
  // Layout - overflow
  ...gen(ii => [`overflow-${ii}`, `overflow: ${ii}`], ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']),
  ...gen(ii => [`overflow-x-${ii}`, `overflow-x: ${ii}`], ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']),
  ...gen(ii => [`overflow-y-${ii}`, `overflow-y: ${ii}`], ['auto', 'hidden', 'clip', 'visible', 'scroll', 'visible']),
  // Layout - overscroll-behavior
  ...gen(ii => [`overscroll-${ii}`, `overscroll-behavior: ${ii}`], ['auto', 'contain', 'none']),
  ...gen(ii => [`overscroll-x-${ii}`, `overscroll-behavior-x: ${ii}`], ['auto', 'contain', 'none']),
  ...gen(ii => [`overscroll-y-${ii}`, `overscroll-behavior-y: ${ii}`], ['auto', 'contain', 'none']),
  // Layout - scrollbar-gutter
  ['scrollbar-auto', '{ scrollbar-gutter: auto }'],
  ['scrollbar-stable', '{ scrollbar-gutter: stable }'],
  ['scrollbar-both', '{ scrollbar-gutter: stable both-edges }'],
  // Layout - position
  ...gen(ii => [`${ii}`, `position: ${ii}`], ['static', 'fixed', 'absolute', 'relative', 'sticky']),
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
  ['visible', '{ visibility: visible }'],
  ['invisible', '{ visibility: hidden }'],
  ['collapse', '{ visibility: collapse }'],
  // Layout - z-index
  ['z-auto', '{ z-index: auto }'],
  ['z-', { css: '{ z-index: $ }', number: '$' }],
  // ---------------------------------------------------------------------------
  // Flexbox & Grid - flex-basis
  ['basis-', { css: '{ flex-basis: $ }', ...UNIT_ALL }],
  // Flexbox & Grid - flex-direction
  ['flex-row', '{ flex-direction: row }'],
  ['flex-row-reverse', '{ flex-direction: row-reverse }'],
  ['flex-col', '{ flex-direction: column }'],
  ['flex-col-reverse', '{ flex-direction: column-reverse }'],
  // Flexbox & Grid - flex-wrap
  ...gen(ii => [`flex-${ii}`, `flex-wrap: ${ii}`], ['nowrap', 'wrap', 'wrap-reverse']),
  // Flexbox & Grid - flex
  ['flex-auto', '{ flex: 1 1 auto }'],
  ['flex-initial', '{ flex: 0 1 auto }'],
  ['flex-none', '{ flex: none }'],
  ['flex-', { css: '{ flex: $ }', number: '$', ...UNIT_FRACTION }],
  // Flexbox & Grid - flex-grow
  ['grow', '{ flex-grow: 1 }'],
  ['grow-', '{ flex-grow: $ }'],
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
  ['auto-cols-', { css: '{ grid-auto-columns: $ }' }],
  // Flexbox & Grid - grid-auto-rows
  ['auto-rows-auto', '{ grid-auto-rows: auto }'],
  ['auto-rows-min', '{ grid-auto-rows: min-content }'],
  ['auto-rows-max', '{ grid-auto-rows: max-content }'],
  ['auto-rows-fr', '{ grid-auto-rows: minmax(0, 1fr) }'],
  ['auto-rows-', { css: '{ grid-auto-rows: $ }' }],
  // Flexbox & Grid - gap
  ['gap-', { css: '{ gap: $ }', ...UNIT_NUMBER }],
  ['gap-x-', { css: '{ column-gap: $ }', ...UNIT_NUMBER }],
  ['gap-y-', { css: '{ row-gap: $ }', ...UNIT_NUMBER }],
  // Flexbox & Grid - justify-content
  ['justify-start', '{ justify-content: flex-start }'],
  ['justify-end', '{ justify-content: flex-end }'],
  ['justify-center', '{ justify-content: center }'],
  ['justify-between', '{ justify-content: space-between }'],
  ['justify-around', '{ justify-content: space-around }'],
  ['justify-evenly', '{ justify-content: space-evenly }'],
  ['justify-stretch', '{ justify-content: stretch }'],
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
  ['items-end-safe', '{ align-items: safe flex-end }'],
  ['items-center', '{ align-items: center }'],
  ['items-center-safe', '{ align-items: safe center }'],
  ['items-baseline', '{ align-items: baseline }'],
  ['items-baseline-last', '{ align-items: last baseline }'],
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
  ...gen(
    ii => [`font-stretch-${ii}`, `font-stretch: ${ii}`],
    [
      'ultra-condensed',
      'extra-condensed',
      'condensed',
      'semi-condensed',
      'normal',
      'semi-expanded',
      'expanded',
      'extra-expanded',
      'ultra-expanded',
    ]
  ),
  // Typography - font-variant-numeric
  ['normal-nums', '{ font-variant-numeric: normal }'],
  ...gen(
    ii => [ii, `font-variant-numeric: ${ii}`],
    [
      'ordinal',
      'slashed-zero',
      'lining-nums',
      'oldstyle-nums',
      'proportional-nums',
      'tabular-nums',
      'diagonal-fractions',
      'stacked-fractions',
    ]
  ),
  // Typography - letter-spacing
  ['tracking-tighter', '{ letter-spacing: -0.05em }'],
  ['tracking-tight', '{ letter-spacing: -0.025em }'],
  ['tracking-normal', '{ letter-spacing: 0 }'],
  ['tracking-wide', '{ letter-spacing: 0.025em }'],
  ['tracking-wider', '{ letter-spacing: 0.05em }'],
  ['tracking-widest', '{ letter-spacing: 0.1em }'],
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
  // Typography - text-decoration-line
  ...gen(ii => [ii, `text-decoration-line: ${ii}`], ['underline', 'overline', 'line-through']),
  ['no-underline', '{ text-decoration-line: none }'],
  // Typography - text-decoration-color
  ...genc('decoration', 'text-decoration-color'),
  // Typography = text-decoration-style
  ...gen(ii => [`decoration-${ii}`, `text-decoration-style: ${ii}`], ['solid', 'double', 'dotted', 'dashed', 'wavy']),
  // Typography - text-decoration-thickness
  ['decoration-auto', '{ text-decoration-thickness: auto }'],
  ['decoration-from-font', '{ text-decoration-thickness: from-font }'],
  ['decoration-', '{ text-decoration-thickness: $ }'],
  // Typography - text-underline-offset
  ['underline-offset-auto', '{ text-underline-offset: auto }'],
  ['underline-offset-', '{ text-underline-offset: $ }'],
  // Typography - text-transform
  ...gen(ii => [`${ii}`, `text-transform: ${ii}`], ['uppercase', 'lowercase', 'capitalize']),
  ['normal-case', '{ text-transform: none }'],
  // Typography - text-overflow
  ['truncate', '{ text-overflow: ellipsis; overflow: hidden; white-space: nowrap }'],
  ['overflow-ellipsis', '{ text-overflow: ellipsis }'],
  ['overflow-clip', '{ text-overflow: clip }'],
  // Typography - text-wrap
  ...gen(ii => [`text-${ii}`, `text-wrap: ${ii}`], ['wrap', 'nowrap', 'balance', 'pretty']),
  // Typography - text-indent
  ['indent', '{ text-indent: $ }'],
  // Typography - vertical-align
  ...gen(
    ii => [`align-${ii}`, `vertical-align: ${ii}`],
    ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super']
  ),
  ['align-', { css: '{ vertical-align: $ }' }],
  // Typography - white-space
  ...gen(
    ii => [`whitespace-${ii}`, `white-space: ${ii}`],
    ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
  ),
  // Typography - word-break
  ['break-normal', '{ word-break: normal }'],
  ['break-all', '{ word-break: break-all }'],
  ['break-keep', '{ word-break: keep-all }'],
  // Typography - overflow-wrap
  ...gen(ii => [`wrap-${ii}`, `overflow-wrap: ${ii}`], ['break-word', 'anywhere', 'normal']),
  // Typography - hyphens
  ...gen(ii => [`hyphens-${ii}`, `hyphens: ${ii}`], ['none', 'manual', 'auto']),
  // Typography - content
  ['content-none', '{ content: none }'],
  ['content-', { css: '{ content: $ }' }],
  // ---------------------------------------------------------------------------
  // Backgrounds - background-attachment
  ...gen(ii => [`bg-${ii}`, `background-attachment: ${ii}`], ['fixed', 'local', 'scroll']),
  // Backgrounds - background-clip
  ...gen(ii => [`bg-clip-${ii}`, `background-clip: ${ii}-box`], ['border', 'padding', 'content']),
  ['bg-clip-text', '{ background-clip: text }'],
  // Backgrounds - background-color'
  ...genc('bg', 'background-color'),
  // Backgrounds - background-image
  ['bg-none', '{ background-image: none }'],
  ['bg-', { css: '{ background-image: $ }' }],
  // Backgrounds - background-origin
  ...gen(ii => [`bg-${ii}`, `background-origin: ${ii}`], ['border-box', 'padding-box', 'content-box']),
  // Backgrounds - background-position
  ...gen(
    ii => [`bg-${ii.replace(' ', '-')}`, `background-position: ${ii}`],
    ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top']
  ),
  ['bg-position-', { css: '{ background-position: $ }' }],
  // Backgrounds - background-repeat
  ...gen(
    ii => [`bg-${ii}`, `background-repeat: ${ii}`],
    ['repeat', 'repeat-x', 'repeat-y', 'space', 'round', 'no-repeat']
  ),
  // Backgrounds - background-size
  ...gen(ii => [`bg-${ii}`, `background-size: ${ii}`], ['auto', 'cover', 'contain']),
  ['bg-size-', { css: '{ background-size: $ }' }],
  // // ---------------------------------------------------------------------------
  // Borders - border-radius
  ...gen(([name, value]) => [`rounded${name}`, `border-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-ss${name}`, `border-start-start-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-se${name}`, `border-start-end-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-ee${name}`, `border-end-end-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-es${name}`, `border-end-start-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-tl${name}`, `border-top-left-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-tr${name}`, `border-top-right-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-br${name}`, `border-bottom-right-radius: ${value}`], RADII),
  ...gen(([name, value]) => [`rounded-bl${name}`, `border-bottom-left-radius: ${value}`], RADII),
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
  ...gen(ii => [`border-${ii}`, `border-style: ${ii}`], ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none']),
  // Borders - outline-width
  ['outline', '{ outline-width: 1px }'],
  ['outline-', { css: '{ outline-width: $ }', number: '$px' }],
  // Borders - outline-color
  ...genc('outline', 'outline-color'),
  // Borders - outline-style
  ...gen(ii => [`outline-${ii}`, `outline-style: ${ii}`], ['solid', 'dashed', 'dotted', 'double', 'none']),
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
  ...gen(ii => [`mix-blend-${ii}`, `mix-blend-mode: ${ii}`], BLEND_MODES),
  // Effects - background-blend-mode
  ...gen(ii => [`bg-blend-${ii}`, `background-blend-mode: ${ii}`], BLEND_MODES),
  // Effects - mask-clip
  ...gen(ii => [`mask-clip-${ii}`, `mask-clip: ${ii}-box`], ['border', 'padding', 'content', 'fill', 'stroke', 'view']),
  ['mask-no-clip', '{ mask-clip: no-clip }'],
  // Effects - mask-composite
  ...gen(ii => [`mask-${ii}`, `mask-composite: ${ii}`], ['add', 'subtract', 'intersect', 'exclude']),
  // Effects - mask-image
  ['mask-none', '{ mask-image: none }'],
  ['mask-image-', { css: '{ mask-image: $ }' }],
  // Effects - mask-mode
  ...gen(ii => [`mask-${ii}`, `mask-mode: ${ii}`], ['alpha', 'luminance']),
  ['mask-match', '{ mask-mode: match-source }'],
  // Effects - mask-origin
  ...gen(ii => [`mask-origin-${ii}`, `mask-origin: ${ii}-box`], ['border', 'padding', 'content', 'fill', 'stroke', 'view']),
  // Effects - mask-position
  ...gen(ii => [`mask-${ii.replace(' ', '-')}`, `mask-position: ${ii}`], ['top left', 'top', 'top right', 'left', 'center', 'right', 'bottom left', 'bottom', 'bottom right']),
  ['mask-position-', { css: '{ mask-position: $ }' }],
  // Effects - mask-repeat
  ...gen(ii => [`mask-${ii}`, `mask-repeat: ${ii}`], ['repeat', 'no-repeat', 'repeat-x', 'repeat-y']),
  ['mask-repeat-space', '{ mask-repeat: space }'],
  ['mask-repeat-round', '{ mask-repeat: round }'],
  // Effects - mask-size
  ...gen(ii => [`mask-${ii}`, `mask-size: ${ii}`], ['auto', 'cover', 'contain']),
  ['mask-size-', { css: '{ mask-size: $ }' }],
  // Effects - mask-type
  ['mask-type-alpha', '{ mask-type: alpha }'],
  ['mask-type-luminance', '{ mask-type: luminance }'],
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
  ...backdrop(['grayscale-', '{ filter: grayscale($) }']),
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
  ['border-collapse', '{ border-collapse: collapse }'],
  ['border-separate', '{ border-collapse: separate }'],
  // Tables - border-spacing
  ['border-spacing-', { css: '{ border-spacing: $ }', ...UNIT_NUMBER }],
  ['border-spacing-x-', { css: '{ border-spacing: $ 0 }', ...UNIT_NUMBER }],
  ['border-spacing-y-', { css: '{ border-spacing: 0 $ }', ...UNIT_NUMBER }],
  // Tables - table-layout
  ['table-auto', '{ table-layout: auto }'],
  ['table-fixed', '{ table-layout: fixed }'],
  // Tables - caption-side
  ['caption-top', '{ caption-side: top }'],
  ['caption-bottom', '{ caption-side: bottom }'],
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
  ['transition-opacity', '{ transition-property: opacity}'],
  ['transition-shadow', '{ transition-property: box-shadow }'],
  ['transition-transform', '{ transition-property: transform }'],
  ['transition-none', '{ transition-property: none }'],
  ['transition-', { css: '{ transition-property: $ }' }],
  // Transitions & Animations - transition-behavior
  ['transition-normal', '{ transition-behavior: normal }'],
  ['transition-discrete', '{ transition-behavior: allow-discrete }'],
  // Transitions & Animations - transition-duration
  ['duration-initial', '{ transition-duration: initial }'],
  ['duration-', { css: '{ transition-duration: $ }', number: '$ms' }],
  // Transitions & Animations - transition-timing-function
  ['ease-linear', '{ transition-timing-function: linear }'],
  ['ease-in', '{ transition-timing-function: ease-in }'],
  ['ease-out', '{ transition-timing-function: ease-out }'],
  ['ease-in-out', '{ transition-timing-function: ease-in-out }'],
  ['ease-initial', '{ transition-timing-function: initial }'],
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
  ['perspective-', { css: '{ perspective: $ }' }],
  // Transforms - perspective-origin
  ...gen(ii => [`perspective-origin-${ii}`, `perspective-origin: ${ii.replace('-', ' ')}`], ORIGINS),
  ['perspective-origin-', '{ perspective-origin: $ }'],
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
  ...gen(ii => [`origin-${ii}`, `transform-origin: ${ii.replace('-', ' ')}`], ORIGINS),
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
    ii => [`scheme-${ii.replace(' ', '-')}`, `color-scheme: ${ii}`],
    ['normal', 'dark', 'light', 'light dark', 'only dark', 'only light']
  ),
  // Interactivity - cursor
  ...gen(
    ii => [`cursor-${ii}`, `cursor: ${ii}`],
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
  ...gen(
    ii => [`touch-${ii}`, `touch-action: ${ii}`],
    ['auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation']
  ),
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
  ['forced-color-adjust-auto', '{ forced-color-adjust: auto }'],
  ['forced-color-adjust-none', '{ forced-color-adjust: none }'],
])
