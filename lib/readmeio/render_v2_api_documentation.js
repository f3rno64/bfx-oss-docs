'use strict'

// const signale = require('signale')
const _isObject = require('lodash/isObject')
const _isEmpty = require('lodash/isEmpty')
const _flatten = require('lodash/flatten')

const parseMarkdown = require('./parse_markdown')
const renderContentElement = require('./render_content_element')

const SIDEBAR_CONTENT_MARKER = '~~SIDEBAR_CONTENT~~'

const genDocumentationNJKHeader = (title) => ([
  '{% from "macros/api_docs/endpoint_doc_block.njk" import endpointDocBlock %}',
  `{% set page_title = "${title}" %}`,
  '{% extends "layouts/base.njk" %}',
  '{% block head %}',
  '  <link rel="stylesheet" type="text/css" href="/index.css" />',
  '  <link rel="stylesheet" type="text/css" href="/css/highlightjs/ir-black.css" />',
  '{% endblock %}',
  '{% block body %}',
  '<div id="bfx-oss-docs-readmeio-header">',
  '</div>',
  '<div id="bfx-oss-docs-readmeio-wrapper">',
  '  <div id="bfx-oss-docs-readmeio__sidebar">',
  '    <ul>',
  SIDEBAR_CONTENT_MARKER,
  '    </ul>',
  '  </div>',
  '  <div id="bfx-oss-docs-readmeio__content">'
])

const closeDocumentationNJK = njk => njk.push(...([
  '</div>',
  '</div>',
  '{% endblock %}'
]))

const genSidebarDivider = (label, id) => ([
  `<li ${id ? `id="${id}"` : ''} class="bfx-oss-docs-readmeio__sidebar-divider">`,
  `<p>${label}</p>`,
  '</li>'
])

const genSidebarLabel = (label, id) => ([
  `<li ${id ? `id="${id}"` : ''} class="bfx-oss-docs-readmeio__sidebar-label">`,
  `<p>${label}</p>`,
  '</li>'
])

const startDocumentationBlock = (njk, title, subtitle) => njk.push(...([
  '<div class="bfx-oss-docs-readmeio-block">',
  '  <div class="bfx-oss-docs-readmeio-block__left">',
  `    <h2 class="bfx-oss-docs-readmeio-block__title">${title}</h2>`,
  '    <div class="bfx-oss-docs-readmeio-block__subtitle">',
  '      {% markdown %}',
  subtitle,
  '      {% endmarkdown %}',
  '    </div>'
]))

const insertDocumentationContent = (njk, section) => njk.push(...([
  ...section
]))

const endDocumentationBlock = (njk, sidebarContent) => njk.push(..._flatten([
  '</div>',
  sidebarContent
    ? [
      '<div class="bfx-oss-docs-readmeio-block__right">',
      ...sidebarContent,
      '</div>'
    ] : [],
  '</div>'
]))

/**
 * @todo refactor!
 * @memberof module:bfx-oss-docs
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {string} njk - template output
 */
const renderV2APIDocumentation = (config) => {
  const { readmeIOData = {} } = config
  const { structure = {} } = readmeIOData
  const { v2 = {} } = structure
  const { documentation = [] } = v2

  const sidebarList = []
  const documentationNJK = genDocumentationNJKHeader('v2 API Reference')

  documentation.forEach((section) => {
    const { label, path, pages } = section

    sidebarList.push(...genSidebarDivider(label))

    pages.forEach((pageFileName) => {
      if (_isObject(pageFileName)) {
        const { label } = pageFileName

        if (!_isEmpty(label)) {
          sidebarList.push(...genSidebarDivider(label))
        }

        return
      }

      const pageData = parseMarkdown(path, pageFileName, config)
      const { title, id, description, elements } = pageData

      sidebarList.push(...genSidebarLabel(title, id))
      startDocumentationBlock(documentationNJK, title, description)

      const sidebarBlocks = []
      const contentBlocks = []

      elements.forEach((elm = {}) => {
        const { content = {} } = elm
        const { sidebar } = content
        const destination = sidebar ? sidebarBlocks : contentBlocks

        destination.push(renderContentElement(elm))
      })

      contentBlocks.forEach((njkRows) => {
        insertDocumentationContent(documentationNJK, njkRows)
      })

      let actualSidebarBlocks = []

      if (sidebarBlocks.length > 1) {
        console.log('WARNING: skipping sidebar content, >1 code blocks, awaiting widget')
      } else {
        actualSidebarBlocks = sidebarBlocks
      }

      // TODO: Refactor prior to commit, break this up
      endDocumentationBlock(documentationNJK, actualSidebarBlocks)
    })
  })

  closeDocumentationNJK(documentationNJK)

  const sidebarListBodyIndex = documentationNJK.findIndex(l => (
    l === SIDEBAR_CONTENT_MARKER
  ))

  if (sidebarListBodyIndex >= 0) {
    documentationNJK[sidebarListBodyIndex] = sidebarList
  }

  return _flatten(documentationNJK).join('\n')
}

module.exports = renderV2APIDocumentation
