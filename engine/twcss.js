import { tw, init } from './compiler.js'
export { add, extend } from './compiler.js'

// Initialize for the document.
if (typeof document !== 'undefined') {
  window.tw ||= tw
  init(document)
}
