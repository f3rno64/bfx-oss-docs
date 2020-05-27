/* global localStorage, debug */

(() => {
  localStorage.debug = 'bfx:*'
  const l = debug('bfx:oss-docs')

  l('boot')

  window.debugBase = l
})()
