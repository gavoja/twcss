/* global HTMLElement, customElements, tw */
import { extend } from '#src/twcss.js'
import { UTILS } from '#src/utils.js'
import { QUERIES } from '#src/queries.js'
import { STATES, STRING_SIZES } from '#src/constants.js'

function register (name, callback) {
  class CustomElement extends HTMLElement {
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = callback(this.shadowRoot)
    }
  }

  customElements.define(name, CustomElement)
}

function registerOuterInner () {
  register('inner-element-1', () => `
    <div tw="p-4 bg-fuchsia-300 border-2 rounded-md w-[300px]">
      Shadow DOM: custom-element-1
    </div>
  `)

  register('inner-element-2', shadowRoot => `
    <div class="${tw.add('p-4 bg-fuchsia-300 border-2 rounded-md w-[300px]', shadowRoot)}">
      Shadow DOM: inner-element-2
    </div>
  `)

  register('outer-element', () => `
    <div tw="bg-blue-300 p-4 rounded-md border-2 space-y-4">
      <div>Shadow DOM: outer-element</div>
      <inner-element-1 tw="block"></inner-element-1>
      <inner-element-2 tw="block"></inner-element-2>
    </div>
  `)
}

function addTestDiv () {
  const innerDiv = document.createElement('div')
  innerDiv.setAttribute('tw', 'bg-violet-200 p-4 rounded-md w-[100px] h-[100px] border-2')
  innerDiv.textContent = 'Inner DIV'

  const div = document.createElement('div')
  const array = ['bg-violet-300 p-4 rounded-md', 'w-[calc(50%_-_50px)]', true && 'h-[200px]', false && 'color-red-500']
  div.setAttribute('tw', array)
  div.appendChild(innerDiv)

  document.body.appendChild(div)
  div.setAttribute('tw', `${div.getAttribute('tw')} border-2`)
}

function addDivWithAllClasses () {
  const classes = []

  classes.push('font-[JetBrains_Mono]')
  classes.push('w-0.5')
  classes.push('w-1')
  classes.push('-w-17')
  classes.push('w-1/2')
  classes.push('w-[7px]')
  classes.push('w-(--my-var)')

  for (const s of Object.keys(STRING_SIZES)) {
    classes.push(`w-${s}`)
  }

  classes.push('bg-[url(https://picsum.photos/id/11/1280/720)]')
  classes.push('aspect-[16/9]')

  classes.push('translate-x-2')
  classes.push('-translate-y-1/3')

  classes.push('p-[1px_2px_3px_4px]')

  for (const cls of UTILS.keys()) {
    if (!UTILS.get(cls).includes('$')) {
      classes.push(cls)
    }
  }

  const div = document.createElement('div')
  div.setAttribute('tw', classes.join(' '))
  div.textContent = 'All classes'
  document.body.appendChild(div)
}

function addDivWithPrefixedClasses () {
  const cls = 'hidden'
  const classes = [cls]

  for (const state of STATES) {
    classes.push(`${state}:${cls}`)
  }

  // Test multiple states.
  classes.push(`focus:hover:${cls}`)
  classes.push(`focus:hover:focus:${cls}`)

  for (const mq of QUERIES.keys()) {
    classes.push(`${mq}:${cls}`)
    for (const state of STATES) {
      classes.push(`${mq}:${state}:${cls}`)
    }
  }

  const div = document.createElement('div')
  div.setAttribute('tw', classes.join(' '))
  div.textContent = 'Prefixed classes'
  document.body.appendChild(div)
}

function addCustomElement (name) {
  register(name, () => `<div tw="bg-amber-300 p-4 rounded-md border-2">Shadow DOM: ${name}</div>`)
  const el = document.createElement(name)
  el.setAttribute('tw', 'block animate-fade')
  document.body.appendChild(el)

  return el
}

function addDivWithCustomClasses () {
  extend({
    classes: {
      foo: '{ width: 50px; height: 50px }',
      'hide-last-child': '> :last-child { display: none }',
      'animate-spin': '{ animation: spin 3s linear infinite }',
      'after': '{ content: "after" }',
      'active': '{ content: "active" }',
      'sm': '{ content: "sm" }',
      'xl': '{ content: "xl" }', // Custom
    },
    colors: {
      octarine: '0.9 0.4 20',
    },
    keyframes: {
      spin: 'to { transform: rotate(360deg) }',
    },
    queries: {
      xl: '@media screen and (min-width: 1280px)',
      'after': '[RESERVED]',
      'active': '[RESERVED]',
    },
  })

  const div = document.createElement('div')
  div.setAttribute(
    'tw',
    'm-[30px] foo hide-last-child animate-spin bg-octarine/20 text-octarine xl:bg-red-300 flex items-center justify-center'
  )
  div.textContent = 'Spin'
  document.body.appendChild(div)
}

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function main () {
  registerOuterInner()

  document.addEventListener('DOMContentLoaded', async () => {
    addTestDiv()
    addCustomElement('custom-element-1')
    const el = addCustomElement('custom-element-2')
    await delay(10)
    el.remove()

    addDivWithPrefixedClasses()
    addDivWithCustomClasses()
    addDivWithAllClasses()
  })
}

main()
