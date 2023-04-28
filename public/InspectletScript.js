(function () {
  window._insp = window._insp || []
  __insp.push(['wid', 1301508767])
  var ldinsp = function () {
    if (typeof window._inspld !== 'undefined') return
    window._inspld = 1
    var insp = document.createElement('script')
    insp.type = 'text/javascript'
    insp.async = true
    insp.id = 'inspsync'
    insp.src =
      (document.location.protocol == 'https:' ? 'https' : 'http') +
      '://cdn.inspectlet.com/inspectlet.js?wid=1301508767&r=' +
      Math.floor(new Date().getTime() / 3600000)
    var x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(insp, x)
  }
  setTimeout(ldinsp, 0)
})()
