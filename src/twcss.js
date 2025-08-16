import { tw, init } from './compiler.js'
export { add, extend } from './compiler.js'

// Initialize for the document.
if (typeof document !== 'undefined') {
  self.tw ||= tw
  init(document)
}
