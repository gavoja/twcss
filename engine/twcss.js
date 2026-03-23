import { init, tw } from './compiler.js'

init(document, globalThis.twExtend)
globalThis.tw = tw
