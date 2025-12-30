/* global Iterator */
import chroma from 'chroma-js'
import fs from 'node:fs'

import { COLORS, COLOR_PROPS } from '#engine/colors.js'
import { PSEUDO, STATES, STRING_SIZES } from '#engine/constants.js'
import { KEYFRAMES } from '#engine/keyframes.js'
import { PREFLIGHT } from '#engine/preflight.js'
import { QUERIES } from '#engine/queries.js'
import { UTILS } from '#engine/utils.js'

const HIERARCHY = {
  'Layout': {
    'aspect-ratio': ['aspect-ratio'],
    'columns': ['columns'],
    'break-after': ['break-after'],
    'break-before': ['break-before'],
    'break-inside': ['break-inside'],
    'box-decoration-break': ['box-decoration-break'],
    'box-sizing': ['box-sizing'],
    'display': ['display', 'clip'],
    'float': ['float'],
    'clear': ['clear'],
    'isolation': ['isolation'],
    'object-fit': ['object-fit'],
    'object-position': ['object-position'],
    'overflow': ['overflow', 'overflow-x', 'overflow-y'],
    'overscroll-behavior': ['overscroll-behavior', 'overscroll-behavior-x', 'overscroll-behavior-y'],
    'scrollbar-gutter': ['scrollbar-gutter'],
    'position': ['position'],
    'top / right / bottom / left': [
      'inset',
      'inset-inline',
      'inset-block',
      'inset-inline-start',
      'inset-inline-end',
      'top',
      'right',
      'bottom',
      'left',
    ],
    'visibility': ['visibility'],
    'z-index': ['z-index'],
  },
  'Flexbox & Grid': {
    'flex-basis': ['flex-basis'],
    'flex-direction': ['flex-direction'],
    'flex-wrap': ['flex-wrap'],
    'flex': ['flex'],
    'flex-grow': ['flex-grow'],
    'flex-shrink': ['flex-shrink'],
    'order': ['order'],
    'grid-template-columns': ['grid-template-columns'],
    'grid-column': ['grid-column', 'grid-column-start', 'grid-column-end'],
    'grid-template-rows': ['grid-template-rows'],
    'grid-row': ['grid-row', 'grid-row-start', 'grid-row-end'],
    'grid-auto-flow': ['grid-auto-flow'],
    'grid-auto-columns': ['grid-auto-columns'],
    'grid-auto-rows': ['grid-auto-rows'],
    'gap': ['gap', 'row-gap', 'column-gap'],
    'justify-content': ['justify-content'],
    'justify-items': ['justify-items'],
    'justify-self': ['justify-self'],
    'align-content': ['align-content'],
    'align-items': ['align-items'],
    'align-self': ['align-self'],
    'place-content': ['place-content'],
    'place-items': ['place-items'],
    'place-self': ['place-self'],
  },
  'Spacing': {
    'padding': [
      'padding',
      'padding-inline',
      'padding-block',
      'padding-inline-start',
      'padding-inline-end',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
    ],
    'margin': [
      'margin',
      'margin-inline',
      'margin-block',
      'margin-inline-start',
      'margin-inline-end',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
    ],
  },
  'Sizing': {
    'width': ['width'],
    'min-width': ['min-width'],
    'max-width': ['max-width'],
    'height': ['height'],
    'min-height': ['min-height'],
    'max-height': ['max-height'],
  },
  'Typography': {
    'font-family': ['font-family'],
    'font-size': ['font-size'],
    'font-smoothing': ['-webkit-font-smoothing'],
    'font-style': ['font-style'],
    'font-weight': ['font-weight'],
    'font-stretch': ['font-stretch'],
    'font-variant-numeric': ['font-variant-numeric'],
    'letter-spacing': ['letter-spacing'],
    'line-clamp': ['-webkit-line-clamp'],
    'line-height': ['line-height'],
    'list-style-image': ['list-style-image'],
    'list-style-position': ['list-style-position'],
    'list-style-type': ['list-style-type'],
    'text-align': ['text-align'],
    'color': ['color'],
    'text-decoration-line': ['text-decoration-line'],
    'text-decoration-color': ['text-decoration-color'],
    'text-decoration-style': ['text-decoration-style'],
    'text-decoration-thickness': ['text-decoration-thickness'],
    'text-underline-offset': ['text-underline-offset'],
    'text-transform': ['text-transform'],
    'text-overflow': ['text-overflow'],
    'text-wrap': ['text-wrap'],
    'text-indent': ['text-indent'],
    'vertical-align': ['vertical-align'],
    'white-space': ['white-space'],
    'word-break': ['word-break'],
    'overflow-wrap': ['overflow-wrap'],
    'hyphens': ['hyphens'],
    'content': ['content'],
  },
  'Backgrounds': {
    'background-attachment': ['background-attachment'],
    'background-clip': ['background-clip'],
    'background-color': ['background-color'],
    'background-image': ['background-image'],
    'background-origin': ['background-origin'],
    'background-position': ['background-position'],
    'background-repeat': ['background-repeat'],
    'background-size': ['background-size'],
  },
  'Borders': {
    'border-radius': [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
    ],
    'border-width': [
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-inline-start-width',
      'border-inline-end-width',
    ],
    'border-color': ['border-color'],
    'border-style': ['border-style'],
    'outline-width': ['outline-width'],
    'outline-color': ['outline-color'],
    'outline-style': ['outline-style'],
    'outline-offset': ['outline-offset'],
  },
  'Effects': {
    'box-shadow': ['box-shadow'],
    'text-shadow': ['text-shadow'],
    'opacity': ['opacity'],
    'mix-blend-mode': ['mix-blend-mode'],
    'background-blend-mode': ['background-blend-mode'],
    'mask-clip': ['mask-clip'],
    'mask-composite': ['mask-composite'],
    'mask-image': ['mask-image'],
    'mask-mode': ['mask-mode'],
    'mask-origin': ['mask-origin'],
    'mask-position': ['mask-position'],
    'mask-repeat': ['mask-repeat'],
    'mask-size': ['mask-size'],
    'mask-type': ['mask-type'],
  },
  'Filters': {
    'filter': ['filter'],
    'backdrop-filter': ['backdrop-filter'],
  },
  'Tables': {
    'border-collapse': ['border-collapse'],
    'border-spacing': ['border-spacing'],
    'table-layout': ['table-layout'],
    'caption-side': ['caption-side'],
  },
  'Transitions & Animations': {
    'transition-property': ['transition-property'],
    'transition-behavior': ['transition-behavior'],
    'transition-duration': ['transition-duration'],
    'transition-timing-function': ['transition-timing-function'],
    'animation': ['animation'],
  },
  'Transforms': {
    'backface-visibility': ['backface-visibility'],
    'perspective': ['perspective'],
    'perspective-origin': ['perspective-origin'],
    'rotate': ['rotate'],
    'scale': ['scale'],
    'transform': ['transform'],
    'transform-origin': ['transform-origin'],
    'transform-style': ['transform-style'],
    'translate': ['translate'],
  },
  'Interactivity': {
    'accent-color': ['accent-color'],
    'appearance': ['appearance'],
    'caret-color': ['caret-color'],
    'color-scheme': ['color-scheme'],
    'cursor': ['cursor'],
    'field-sizing': ['field-sizing'],
    'pointer-events': ['pointer-events'],
    'resize': ['resize'],
    'scroll-behavior': ['scroll-behavior'],
    'scroll-margin': ['scroll-margin'],
    'scroll-padding': ['scroll-padding'],
    'scroll-snap-align': ['scroll-snap-align'],
    'scroll-snap-stop': ['scroll-snap-stop'],
    'scroll-snap-type': ['scroll-snap-type'],
    'touch-action': ['touch-action'],
    'user-select': ['user-select'],
    'will-change': ['will-change'],
  },
  'SVG': {
    'fill': ['fill'],
    'stroke': ['stroke'],
    'stroke-width': ['stroke-width'],
  },
  'Accessibility': {
    'forced-color-adjust': ['forced-color-adjust'],
  },
}

function dolar (str, replacement) {
  return str.replaceAll(/\$/g, replacement)
}

function getRules (props) {
  const rules = new Map()

  for (const [cls, val] of UTILS.entries()) {
    const css = val.css || val

    // Skip non matching utils.
    if (!props.some(p => css.includes(`{ ${p}:`))) {
      continue
    }

    if (typeof val === 'string' && val.includes('$')) {
      console.error(`Utility "${cls}" is dynamic but not defined as an object.`)
      continue
    }

    // Dynamic rules.
    if (typeof val === 'object') {
      if (val.string) {
        for (const [name, size] of Object.entries(STRING_SIZES)) {
          rules.set(`${cls}${name}`, dolar(css, dolar(val.string, size)))
        }
      }

      if (val.number) {
        rules.set(`${cls}<number>`, dolar(css, dolar(val.number, '<number>')))
        rules.set(`-${cls}<number>`, dolar(css, dolar(val.number, '-<number>')))
      }

      if (val.fraction) {
        rules.set(`${cls}<fraction>`, dolar(css, dolar(val.fraction, '<fraction>')))
      }

      rules.set(`${cls}[<value>]`, dolar(css, '<value>'))
      rules.set(`${cls}(<custom-property>)`, dolar(css, 'var(<custom-property>)'))
      continue
    }

    // Composite rules.
    const isComposite = css.split(/ {/).pop().match(/:/g).length > 1
    if (isComposite) {
      rules.set(cls, css.replace(/{ /, '{\n  ').replace(/; */g, ';\n  ').replace(/}/, '\n}'))
      continue
    }

    // Color rules.
    if (COLOR_PROPS.values().some(p => css.includes(`${p}:`))) {
      if (cls.endsWith('-black')) {
        rules.set(cls.replace('-black', '-<color>'), css.replace('oklch(0 0 0)', 'oklch(...)'))
      }

      continue
    }

    // Simple rule.
    rules.set(cls, css)
  }

  return rules
}

function generateReference () {
  const mdContents = []
  mdContents.push('# Reference', '')
  mdContents.push('## Defaults', '')

  //
  // CSS reset.
  //

  mdContents.push('### CSS preflight', '')
  mdContents.push(`\`\`\`css\n${PREFLIGHT.join('\n')}\n\`\`\``, '')

  //
  // Media queries.
  //

  mdContents.push('### Media and container queries', '')
  mdContents.push('All container queries are relative to the ancestor with `@container` class.', '')
  for (const [prefix, query] of QUERIES) {
    mdContents.push(`\`\`\`css\n/* ${prefix} */\n${query}\n\`\`\``, '')
  }

  //
  // Prefixes.
  //

  mdContents.push('### Prefixes', '')

  mdContents.push('Classes can be prefixed. The order is always `query:state:pseudo:class`. Multiple states are supported.', '')
  mdContents.push('States:', '')
  mdContents.push('- Multiple states can be combined, e.g. `hover:focus:bg-blue-500`.')
  mdContents.push('- Each state also supports negation with `not-` prefix, e.g. `not-hover:bg-blue-500`.')
  const states = Iterator.from(STATES.keys()).filter(s => !s.startsWith('not-') && !s.startsWith('has-')).map(s => `\`${s}\``).toArray().join(', ')
  mdContents.push(`- Supported states: ${states}.`)
  mdContents.push('')

  mdContents.push('Pseudo elements:', '')
  const pseudo = Iterator.from(PSEUDO).map(s => `\`${s}\``).toArray().join(', ')
  mdContents.push(`- Supported pseudo elements: ${pseudo}.`)
  mdContents.push('')

  //
  // Keyframes.
  //

  mdContents.push('### Keyframes', '')
  for (const [name, keyframes] of KEYFRAMES) {
    mdContents.push(`\`\`\`css\n@keyframes ${name} {\n  ${keyframes}\n}\n\`\`\``, '')
  }

  //
  // Color table.
  //

  mdContents.push('### Colors', '')
  mdContents.push(
    'In addition to the colors below, `black`, `white`, `transparent`, `current` and `inherit` are also supported.',
    ''
  )
  mdContents.push('|   | 50|100|200|300|400|500|600|700|800|900|950|')
  mdContents.push('|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|')

  const colorRow = new Set()
  for (const [cls, color] of COLORS) {
    if (cls.endsWith('-50')) {
      colorRow.clear()
      colorRow.add(`**${cls.replace('-50', '')}**`)
    }

    const [l, c, h] = color.split(' ').map(Number)
    const hex = chroma.oklch(l, c, h).hex()
    colorRow.add(`$\\color{${hex}}{\\Huge\\textsf{█}}$`)

    if (cls.endsWith('-950')) {
      mdContents.push([...colorRow].join('|'))
    }
  }

  mdContents.push('')

  //
  // All static utility classes by hierarchy.
  //

  for (const [category, subcategories] of Object.entries(HIERARCHY)) {
    mdContents.push(`## ${category}`, '')

    for (const [subcategory, props] of Object.entries(subcategories)) {
      mdContents.push(`### ${subcategory}`, '')

      const rules = getRules(props)

      if (rules.size === 0) {
        mdContents.push('Currently unsupported.', '')
        continue
      }

      for (const [cls, css] of rules) {
        mdContents.push(`\`\`\`\n.${cls} ${css}\n\`\`\``, '')
      }
    }
  }

  fs.writeFileSync('REFERENCE.md', mdContents.join('\n'))
}

generateReference()
