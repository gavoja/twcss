import {
  ANIM_TIME,
  BRIGHTNESS_LEVELS,
  COLUMNS,
  CONTRAST_LEVELS,
  DURATIONS,
  HUE_ROTATE_DEGREES,
  LINE_CLAMPS,
  OPACITIES,
  ORIGINS,
  RADII,
  ROTATE_DEGREES,
  SATURATE_LEVELS,
  SCALES,
  SKEWS,
  STROKE_WIDTHS,
  WIDTHS,
  Z_INDEXES,
  BLEND_MODES,
} from './constants.js'
import { backdrop, gen, genc } from './generators.js'

// Tries to follow Tailwind's order.
export const UTILS = new Map([
  // ---------------------------------------------------------------------------
  // Layout - aspect-ratio
  ['@container', '{ container-type: inline-size }'],
  ['aspect-auto', '{ aspect-ratio: auto }'],
  ['aspect-square', '{ aspect-ratio: 1 / 1 }'],
  ['aspect-video', '{ aspect-ratio: 16 / 9 }'],
  ['aspect', '{ aspect-ratio: $ }'],
  // Layout - columns
  ...gen(ii => [`columns-${ii}`, `columns: ${ii}`], [...COLUMNS, 'auto']),
  // Layout - break-after
  ...gen(ii => [`break-after-${ii}`, `break-after: ${ii}`], ['auto', 'avoid', 'avoid-page', 'page', 'left', 'right', 'column']),
  // Layout - break-before
  ...gen(ii => [`break-before-${ii}`, `break-after: ${ii}`], ['auto', 'avoid', 'avoid-page', 'page', 'left', 'right', 'column']),
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
  ['inset', '{ inset: $ }'],
  ['inset-x', '{ inset-inline: $ }'],
  ['inset-y', '{ inset-block: $ }'],
  ['start', '{ inset-inline-start: $ }'],
  ['end', '{ inset-inline-end: $ }'],
  ['top', '{ top: $ }'],
  ['right', '{ right: $ }'],
  ['bottom', '{ bottom: $ }'],
  ['left', '{ left: $ }'],
  // Layout - visibility
  ['visible', '{ visibility: visible }'],
  ['invisible', '{ visibility: hidden }'],
  ['collapse', '{ visibility: collapse }'],
  // Layout - z-index
  ...gen(ii => [`z-${ii}`, `z-index: ${ii}`], Z_INDEXES),
  // ---------------------------------------------------------------------------
  // Flexbox & Grid - flex-basis
  ['basis', '{ flex-basis: $ }'],
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
  ...gen(ii => [`order-${ii}`, `columns: ${ii}`], COLUMNS),
  ['order-first', '{ order: -9999 }'],
  ['order-last', '{ order: 9999 }'],
  ['order-none', '{ order: 0 }'],
  // Flexbox & Grid - grid-template-columns
  ...gen(ii => [`grid-cols-${ii}`, `grid-template-columns: repeat(${ii}, minmax(0, 1fr))`], COLUMNS),
  ['grid-cols-none', '{ grid-template-columns: none }'],
  ['grid-cols-subgrid', '{ grid-template-columns: subgrid }'],
  // Flexbox & Grid - grid-column
  ['col-auto', '{ grid-column: auto }'],
  ...gen(ii => [`col-span-${ii}`, `grid-column: span ${ii} / span ${ii}`], COLUMNS),
  ['col-span-full', '{ grid-column: 1 / -1 }'],
  ...gen(ii => [`col-start-${ii}`, `grid-column-start: ${ii}`], [...COLUMNS, 13, 'auto']),
  // Flexbox & Grid - grid-template-rows
  ...gen(ii => [`grid-rows-${ii}`, `grid-template-rows: repeat(${ii}, auto)`], COLUMNS),
  ['grid-rows-none', '{ grid-template-rows: none }'],
  ['grid-rows-subgrid', '{ grid-template-rows: subgrid }'],
  // Flexbox & Grid - grid-row
  ['row-auto', '{ grid-row: auto }'],
  ...gen(ii => [`row-span-${ii}`, `grid-row: span ${ii} / span ${ii}`], COLUMNS),
  ['row-span-full', '{ grid-row: 1 / -1 }'],
  ...gen(ii => [`row-start-${ii}`, `grid-row-start: ${ii}`], [...COLUMNS, 13, 'auto']),
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
  ['gap', '{ gap: $ }'],
  ['gap-x', '{ column-gap: $ }'],
  ['gap-y', '{ row-gap: $ }'],
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
  ['p', '{ padding: $ }'],
  ['px', '{ padding-inline: $ }'],
  ['py', '{ padding-block: $ }'],
  ['pt', '{ padding-top: $ }'],
  ['pr', '{ padding-right: $ }'],
  ['pb', '{ padding-bottom: $ }'],
  ['pl', '{ padding-left: $ }'],
  ['ps', '{ padding-inline-start: $ }'],
  ['pe', '{ padding-inline-end: $ }'],
  // Spacing - margin
  ['m', '{ margin: $ }'],
  ['mx', '{ margin-inline: $ }'],
  ['my', '{ margin-block: $ }'],
  ['mt', '{ margin-top: $ }'],
  ['mr', '{ margin-right: $ }'],
  ['mb', '{ margin-bottom: $ }'],
  ['ml', '{ margin-left: $ }'],
  ['ms', '{ margin-inline-start: $ }'],
  ['me', '{ margin-inline-end: $ }'],
  ['space-x', ' > :not(:last-child) { margin-inline-end: $ }'],
  ['space-y', ' > :not(:last-child) { margin-bottom: $ }'],
  // Sizing - width
  ['w', '{ width: $ }'],
  // Sizing - min-width
  ['min-w', '{ min-width: $ }'],
  // Sizing - max-width
  ['max-w', '{ max-width: $ }'],
  // Sizing - height
  ['h', '{ height: $ }'],
  // Sizing - min-height
  ['min-h', '{ min-height: $ }'],
  // Sizing - max-height
  ['max-h', '{ max-height: $ }'],
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
  ...gen(ii => [`line-clamp-${ii}`, `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${ii}`], LINE_CLAMPS),
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
  ['indent', '{ text-indent: $ }'],
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
  // Typography - content
  ['content', '{ content: $ }'],
  ['content', '{ content: $ }'],
  // ---------------------------------------------------------------------------
  // Backgrounds - background-attachment
  ...gen(ii => [`bg-${ii}`, `background-attachment: ${ii}`], ['fixed', 'local', 'scroll']),
  // Backgrounds - background-clip
  ...gen(ii => [`bg-clip-${ii}`, `background-clip: ${ii}-box`], ['border', 'padding', 'content']),
  ['bg-clip-text', '{ background-clip: text }'],
  // Backgrounds - background-color'
  ...genc('bg', 'background-color'),
  // Backgrounds - background-image
  ['bg', '{ background-image: $ }'],
  ['bg-none', '{ background-image: none }'],
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
  ...gen(ii => [`border-${ii}`, `border-width: ${ii}px`], WIDTHS),
  ...gen(ii => [`border-t-${ii}`, `border-top-width: ${ii}px`], WIDTHS),
  ...gen(ii => [`border-b-${ii}`, `border-bottom-width: ${ii}px`], WIDTHS),
  ...gen(ii => [`border-l-${ii}`, `border-left-width: ${ii}px`], WIDTHS),
  ...gen(ii => [`border-r-${ii}`, `border-right-width: ${ii}px`], WIDTHS),
  ...gen(ii => [`border-s-${ii}`, `border-inline-start-width: ${ii}px`], WIDTHS),
  ...gen(ii => [`border-e-${ii}`, `border-inline-end-width: ${ii}px`], WIDTHS),
  ['border', '{ border-width: 1px }'],
  ['border-t', '{ border-top-width: 1px }'],
  ['border-b', '{ border-bottom-width: 1px }'],
  ['border-l', '{ border-left-width: 1px }'],
  ['border-r', '{ border-right-width: 1px }'],
  ['border-s', '{ border-inline-start-width: 1px }'],
  ['border-e', '{ border-inline-end-width: 1px }'],
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
  ['shadow-none', '{ box-shadow: 0 0 rgb(0 0 0 / 0) }'],
  // Effects - opacity
  ...gen(ii => [`opacity-${ii}`, `opacity: ${ii / 100}`], OPACITIES),
  // Effects - mix-blend-mode
  ...gen(ii => [`mix-blend-${ii}`, `mix-blend-mode: ${ii}`], BLEND_MODES),
  // Effects - background-blend-mode
  ...gen(ii => [`bg-blend-${ii}`, `background-blend-mode: ${ii}`], BLEND_MODES),
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
  ...backdrop(gen(ii => [`brightness-${ii}`, `filter: brightness(${ii}%)`], BRIGHTNESS_LEVELS)),
  // Filters - contrast
  ...backdrop(gen(ii => [`contrast-${ii}`, `filter: contrast(${ii}%)`], CONTRAST_LEVELS)),
  // Filters - drop-shadow
  ['drop-shadow-xs', '{ filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }'],
  ['drop-shadow-sm', '{ filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }'],
  ['drop-shadow-md', '{ filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }'],
  ['drop-shadow-lg', '{ filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }'],
  ['drop-shadow-xl', '{ filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }'],
  ['drop-shadow-2xl', '{ filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }'],
  ['drop-shadow-none', '{ filter: drop-shadow(0 0 rgba(0, 0, 0, 0)) }'],
  // Filters - grayscale
  ...backdrop(['grayscale', '{ filter: grayscale(100%) }']),
  ...backdrop(['grayscale-0', '{ filter: grayscale(0) }']),
  // Filters - hue-rotate
  ...backdrop(gen(ii => [`hue-rotate-${ii}`, `filter: hue-rotate(${ii}deg)`], HUE_ROTATE_DEGREES)),
  ...backdrop(gen(ii => [`-hue-rotate-${ii}`, `filter: hue-rotate(-${ii}deg)`], HUE_ROTATE_DEGREES)),
  // Filters - invert
  ...backdrop(['invert', '{ filter: invert(100%) }']),
  ...backdrop(['invert-0', '{ filter: invert(0) }']),
  // Filters - opacity
  ...gen(ii => [`backdrop-opacity-${ii}`, `backdrop-filter: opacity(${ii / 100})`], OPACITIES),
  // Filters - saturate
  ...gen(ii => [`saturate-${ii}`, `filter: saturate(${ii}%)`], SATURATE_LEVELS),
  // Filters - sepia
  ...backdrop(['invert', '{ filter: sepia(100%) }']),
  ...backdrop(['invert-0', '{ filter: sepia(0) }']),
  // Filters
  ...backdrop(['filter-none', '{ filter: none }']),
  // ---------------------------------------------------------------------------
  // Tables - border-collapse
  ['border-collapse', '{ border-collapse: collapse }'],
  ['border-separate', '{ border-collapse: separate }'],
  // Tables - border-spacing
  ['border-spacing', '{ border-spacing: $ }'],
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
  // Transitions & Animations - transition-timing-function
  ['ease-linear', '{ transition-timing-function: linear }'],
  ['ease-in', '{ transition-timing-function: ease-in }'],
  ['ease-out', '{ transition-timing-function: ease-out }'],
  ['ease-in-out', '{ transition-timing-function: ease-in-out }'],
  ['ease-initial', '{ transition-timing-function: initial }'],
  // Transitions & Animations - transition-delay
  ...gen(ii => [`delay-${ii}`, `transition-delay: ${ii}ms`], DURATIONS),
  // Transitions & Animations - animation
  ['animate-expand', `{ animation: expand ${ANIM_TIME} ease-in-out }`],
  ['animate-toast', `{ animation: toast ${ANIM_TIME} ease-in-out }`],
  ['animate-fade', `{ animation: fade ${ANIM_TIME} ease-in-out }`],
  ['animate-none', '{ animation: none }'],
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
  ...gen(ii => [`perspective-origin-${ii}`, `perspective-origin: ${ii.replace('-', ' ')}`], ORIGINS),
  // Transforms - rotate
  ...gen(ii => [`rotate-${ii}`, `rotate: ${ii}deg`], ROTATE_DEGREES),
  ...gen(ii => [`-rotate-${ii}`, `rotate: -${ii}deg`], ROTATE_DEGREES),
  // Transforms - scale
  ...gen(ii => [`scale-${ii}`, `transform: scale(${ii / 100})`], SCALES),
  ...gen(ii => [`scale-x-${ii}`, `transform: scaleX(${ii / 100})`], SCALES),
  ...gen(ii => [`scale-y-${ii}`, `transform: scaleY(${ii / 100})`], SCALES),
  // Transforms - skew
  ...gen(ii => [`skew-x-${ii}`, `transform: skewX(${ii}deg)`], SKEWS),
  ...gen(ii => [`skew-y-${ii}`, `transform: skewY(${ii}deg)`], SKEWS),
  // Transforms - transform-origin
  ...gen(ii => [`origin-${ii}`, `transform-origin: ${ii.replace('-', ' ')}`], ORIGINS),
  // Transforms - transform-style
  ['transform-3d', '{ transform-style: preserve-3d }'],
  ['transform-flat', '{ transform-style: flat }'],
  // Transforms - translate
  ['translate-x', '{ transform: translateX($) }'],
  ['translate-y', '{ transform: translateY($) }'],
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
  ['scroll-m', '{ scroll-margin: $ }'],
  ['scroll-mx', '{ scroll-margin-inline: $ }'],
  ['scroll-my', '{ scroll-margin-block: $ }'],
  ['scroll-ms', '{ scroll-margin-inline-start: $ }'],
  ['scroll-me', '{ scroll-margin-inline-end: $ }'],
  ['scroll-mt', '{ scroll-margin-top: $ }'],
  ['scroll-mr', '{ scroll-margin-right: $ }'],
  ['scroll-mb', '{ scroll-margin-bottom: $ }'],
  ['scroll-ml', '{ scroll-margin-left: $ }'],
  // Interactivity - scroll-padding
  ['scroll-p', '{ scroll-padding: $ }'],
  ['scroll-px', '{ scroll-padding-inline: $ }'],
  ['scroll-py', '{ scroll-padding-block: $ }'],
  ['scroll-ps', '{ scroll-padding-inline-start: $ }'],
  ['scroll-pe', '{ scroll-padding-inline-end: $ }'],
  ['scroll-pt', '{ scroll-padding-top: $ }'],
  ['scroll-pr', '{ scroll-padding-right: $ }'],
  ['scroll-pb', '{ scroll-padding-bottom: $ }'],
  ['scroll-pl', '{ scroll-padding-left: $ }'],
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
  // SVG - stroke
  ...genc('stroke', 'stroke'),
  // SVG - stroke-width
  ...gen(ii => [`stroke-${ii}`, `stroke-width: ${ii}`], STROKE_WIDTHS),
  // ---------------------------------------------------------------------------
  // Accessibility - forced-color-adjust
  ['forced-color-adjust-auto', '{ forced-color-adjust: auto }'],
  ['forced-color-adjust-none', '{ forced-color-adjust: none }'],
])
