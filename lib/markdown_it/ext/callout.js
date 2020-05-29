'use strict'

const _isEmpty = require('lodash/isEmpty')
const MarkdownItContainer = require('markdown-it-container')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItContainer, 'callout', {
    render: function (tokens, idx) {
      if (tokens[idx].nesting !== 1) {
        return '</div></div></div>'
      }

      const m = tokens[idx].info.trim().match(/^callout\s(\w*)\s?(.*)?$/)
      const type = md.utils.escapeHtml(m[1])
      const title = _isEmpty(m[2])
        ? ''
        : md.utils.escapeHtml(m[2])

      return [
        `<div class="bfx-oss-docs-md-callout ${type}">`,
        '<div class="bfx-oss-docs-md-callout__marker"><p>*</p></div>',
        '<div class="bfx-oss-docs-md-callout__content">',
        '<div class="bfx-oss-docs-md-callout__header">',
        `<p>${title}</p><h4>${type}</h4>`,
        '</div>',
        '<div class="bfx-oss-docs-md-callout__body">'
      ].join('')
    }
  })
}

module.exports = registerExtension
