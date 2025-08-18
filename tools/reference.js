/**
 * @file Dirty reference generator.
 * @author Michal Kochel
 */
import chroma from 'chroma-js'
import fs from 'node:fs'
import { COLORS, COLOR_PROPS } from '#src/colors.js'
import { KEYFRAMES } from '#src/keyframes.js'
import { QUERIES } from '#src/queries.js'
import { RESET } from '#src/reset.js'
import { UTILS } from '#src/utils.js'
import { STRING_SIZES, STATES, PSEUDO } from '#src/constants.js'

const HIERARCHY = {
  'Layout': {
    'aspect-ratio': ['aspect-ratio'],
    'columns': ['columns'],
    'break-after': ['break-after'],
    'break-before': ['break-after'],
    'break-inside': ['break-after'],
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
    'transform': ['transform'],
    'transform-origin': ['transform-origin'],
    'transform-style': ['transform-style'],
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

function getRules(props) {
  const rules = new Map()

  for (const [cls, css] of UTILS.entries().filter(([_cls, css]) => props.some(p => css.includes(`{ ${p}:`)))) {
    // Split composite rules into multiple lines.
    const isComposite = css.split(/ {/).pop().match(/:/g).length > 1
    if (isComposite) {
      rules.set(cls, css.replace(/{ /, '{\n  ').replace(/; */g, ';\n  ').replace(/}/, '\n}'))
      continue
    }

    // Detect dynamic properties.
    if (css.includes('$')) {
      rules.set(`${cls}SUFFIX`, css.replace('$', '...'))
      continue
    }

    // Detect colors.
    if (COLOR_PROPS.values().some(p => css.includes(`${p}:`))) {
      if (cls.endsWith('-black')) {
        rules.set(cls.replace('-black', '-COLOR'), css.replace('oklch(0 0 0)', 'oklch(...)'))
      }

      continue
    }

    rules.set(cls, css)
  }

  return rules
}

function generateReference() {
  const mdContents = []
  mdContents.push('# Reference', '')
  mdContents.push('## Defaults', '')

  //
  // CSS reset.
  //

  mdContents.push('### CSS reset', '')
  mdContents.push(`\`\`\`css\n${RESET.join('\n')}\n\`\`\``, '')

  //
  // Media queries.
  //

  mdContents.push('### Media and container queries', '')
  mdContents.push('All container queries are relative to the ancestor with `@container` class.', '')
  for (const [prefix, query] of QUERIES) {
    mdContents.push(`\`\`\`css\n/* ${prefix} */\n${query}\n\`\`\``, '')
  }

  //
  // State prefixes.
  //

  mdContents.push('### Prefixes', '')

  mdContents.push('Classes can be prefixed. The order is always `query:state:pseudo:class`.', '')
  mdContents.push(`- Supported states: ${STATES.map(s => `\`${s}\``).join(', ')}.`)
  mdContents.push(`- Supported pseudo elements: ${PSEUDO.map(s => `\`${s}\``).join(', ')}.`)
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
    '',
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
  // Size table.
  //

  mdContents.push('### Dynamic properties', '')
  mdContents.push(
    'Dynamic properties can be set by adding a suffix according to the table below. With a few exceptions, this mainly applies to sizing. Note that for simplicity the engine treats all of them equally, which means not all combinations will result in a valid CSS. A good example is background image: `bg-[url(...)]` makes sense, whereas `bg-1/3` does not.',
    '',
  )

  mdContents.push('|Value                      |Output                              |Example (width)        |')
  mdContents.push('|---------------------------|------------------------------------|-----------------------|')
  mdContents.push('|`class-<number>`           |`property: calc(<number> * 4px)`    |`w-4`                  |')
  mdContents.push('|`-class-<number>`          |`property: calc(-<number> * 4px)`   |`-w-4`                 |')
  mdContents.push('|`class-<fraction>`         |`property: calc(<fraction> * 100%)` |`w-1/4`                |')
  mdContents.push('|`-class-<fraction>`        |`property: calc(-<fraction> * 100%)`|`-w-1/4`               |')
  mdContents.push('|`class-[<value>]`          |`property: <value>`                 |`w-[calc(50%_-_10px)]` |')
  mdContents.push('|`class-(--custom-property)`|`property: var(--custom-property)`  |`w-(--button-height)`  |')

  for (const [name, value] of Object.entries(STRING_SIZES)) {
    mdContents.push(`|\`class-${name}\`|\`property: ${value}\`|\`w-${name}\`|`)
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
        mdContents.push(`\`\`\`css\n.${cls} ${css}\n\`\`\``, '')
      }
    }
  }

  fs.writeFileSync('REFERENCE.md', mdContents.join('\n'))
}

generateReference()
