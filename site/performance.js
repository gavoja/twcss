const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    console.log(entry)
  }
})

observer.observe({
  entryTypes: [
    'element',
    'event',
    'first-input',
    'largest-contentful-paint',
    'layout-shift',
    'long-animation-frame',
    'longtask',
    'mark',
    'measure',
    'navigation',
    'paint',
    'resource',
    'visibility-state',
  ]
})
