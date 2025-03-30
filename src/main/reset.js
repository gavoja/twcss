export const RESET = [
  '*,*::before,*::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: currentColor; margin: 0; padding: 0 }',
  'ul,ol { list-style: none }',
  'h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit }',
  'input,button,textarea,select { font: inherit }',
  'body,html { height: 100% }',
  'img,video { max-width: 100%; height: auto }',
  'cite { font-style: normal }',
  'a { text-decoration: none; color: inherit }',
  'button { text-align: unset; background: transparent; color: inherit }',
  'body { overflow-y: scroll }',
  'svg { display: block }',
  '::placeholder { color: currentColor; opacity: 0.8 }',
  '[tw]:not([class]) { display: none }', // Prevent repaint.
]
