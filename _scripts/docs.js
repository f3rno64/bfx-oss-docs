/* global localStorage, debug, PerfectScrollbar */

(() => {
  // init debug
  localStorage.debug = 'bfx:*'
  const l = debug('bfx:oss-docs')

  l('boot')

  window.debugBase = l

  // init perfect scrollbar
  new PerfectScrollbar('#bfx-oss-docs-side-bar') // eslint-disable-line
})()
