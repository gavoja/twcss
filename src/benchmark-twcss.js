import '#engine/twcss.js'

document.addEventListener('DOMContentLoaded', () => {
  const elements = 10000
  const wrapper = document.createElement('div')
  wrapper.setAttribute('tw', 'p-1 flex gap-1 flex-wrap')
  document.body.appendChild(wrapper)

  for (let ii = 0; ii < elements; ii++) {
    const div = document.createElement('div')
    div.setAttribute('tw', `inline-block bg-black text-white rounded-sm p-1 w-[${ii + 32}px]`)
    div.textContent = ii
    wrapper.appendChild(div)
  }
})
