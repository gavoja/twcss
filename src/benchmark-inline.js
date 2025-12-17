document.addEventListener('DOMContentLoaded', () => {
  // Build the heavy DOM after the initial static fallback
  const elements = 10000
  const wrapper = document.createElement('div')
  wrapper.setAttribute('style', 'padding: 4px; display: flex; flex-direction: row; gap: 4px; flex-wrap: wrap')
  document.body.appendChild(wrapper)

  for (let ii = 0; ii < elements; ii++) {
    const div = document.createElement('div')
    div.setAttribute('style', `display: inline-block; background-color: black; color: white; border-radius: 4px; padding: 4px; width: ${ii + 32}px`)
    div.textContent = ii
    wrapper.appendChild(div)
  }
})
