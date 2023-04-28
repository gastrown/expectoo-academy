// (function () {

// })()
(function () {
  if (typeof window.__insp === 'undefined') {
    window.__insp = []
  }
  var head = document.getElementsByTagName('head').item(0)
  var script = document.createElement('script')

  var src =
    document.location.protocol == 'https:'
      ? 'https://www.formilla.com/scripts/feedback.js'
      : 'http://www.formilla.com/scripts/feedback.js'

  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', src)
  script.setAttribute('async', true)

  var complete = false

  script.onload = script.onreadystatechange = function () {
    if (
      !complete &&
      (!this.readyState ||
        this.readyState == 'loaded' ||
        this.readyState == 'complete')
    ) {
      complete = true
      Formilla.guid = 'cs650f96-e704-4f62-aa36-056708c2baaf'
      Formilla.loadWidgets()
    }
  }

  head.appendChild(script)
})()
