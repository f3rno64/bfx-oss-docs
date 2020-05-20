'use strict'

window.addEventListener('DOMContentLoaded', () => {
  const mainElm = document.querySelector('#main')
  const titleElm = document.querySelector('#main > h1.page-title')
  const title = titleElm.textContent

  titleElm.remove()

  const newTitleElm = document.createElement('h1')
  newTitleElm.className = 'page-title'

  const packageNameElm = document.createElement('h1')
  packageNameElm.className = 'package-title'

  newTitleElm.textContent = title
  packageNameElm.textContent = 'bfx-hf-algo'

  const wrapperElm = document.createElement('div')
  wrapperElm.setAttribute('id', 'page-title-wrapper')
  wrapperElm.append(newTitleElm)
  wrapperElm.append(packageNameElm)

  mainElm.prepend(wrapperElm)
})
