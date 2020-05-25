'use strict'

window.addEventListener('DOMContentLoaded', () => {
  const mainElm = document.querySelector('#main')
  const titleElm = document.querySelector('#main > h1.page-title')
  const title = titleElm.textContent

  titleElm.remove()

  const newTitleElm = document.createElement('h1')
  newTitleElm.className = 'page-title'
  newTitleElm.textContent = title

  const wrapperElm = document.createElement('div')
  wrapperElm.setAttribute('id', 'page-title-wrapper')
  wrapperElm.append(newTitleElm)

  mainElm.prepend(wrapperElm)
})
