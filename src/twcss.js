import { init } from './compiler.js'
export { extend } from './compiler.js'

// Initialize for the document.
if (typeof self !== 'undefined') {
  init(document)
}
