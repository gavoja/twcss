import { extend } from '../../src/twcss.js'
import { UTILS } from '../../src/utils.js'
import { QUERIES } from '../../src/queries.js'
import { STATES } from '../../src/constants.js'

function addTestDiv () {
  const div = document.createElement('div')
  div.setAttribute('tw', 'bg-violet-300 p-4 rounded-md w-[100px] h-[100px]')
  div.textContent = 'Test DIV'
  document.body.appendChild(div)
  div.setAttribute('tw', `${div.getAttribute('tw')} border-2`)
}

function addDivWithAllClasses () {
  const classes = []

  for (const cls of UTILS.keys()) {
    // Ignore section titles.
    if (cls !== cls.toUpperCase()) {
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
  class CustomElement extends HTMLElement {
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = '<div tw="bg-amber-300 p-4 rounded-md border-2">Shadow DOM</div>'
    }
  }

  customElements.define(name, CustomElement)
  const el = document.createElement(name)
  el.setAttribute('tw', 'block')
  document.body.appendChild(el)

  return el
}

function addDivWithCustmClasses () {
  extend({
    classes: {
      'foo': '{ width: 50px; height: 50px }',
      'hide-last-child': '> :last-child { display: none }',
      'animate-spin': '{ animation: spin 3s linear infinite }'
    },
    colors: {
      'octarine': '0.9 0.4 20'
    },
    keyframes: {
      'spin': 'to { transform: rotate(360deg) }'
    },
    queries: {
      'print': '@media print'
    }
  })

  const div = document.createElement('div')
  div.setAttribute('tw', 'm-[30px] foo hide-last-child animate-spin bg-octarine/20 print:bg-red-300 flex items-center justify-center')
  div.textContent = 'Spin'
  document.body.appendChild(div)
}

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

document.addEventListener('DOMContentLoaded', async () => {
  addTestDiv()
  addCustomElement('custom-element-1')
  el = addCustomElement('custom-element-2')
  await delay(10)
  el.remove()

  addDivWithAllClasses()
  addDivWithPrefixedClasses()
  addDivWithCustmClasses()
})
