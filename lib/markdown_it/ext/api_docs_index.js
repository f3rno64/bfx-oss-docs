'use strict'

const MarkdownItContainer = require('markdown-it-container')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItContainer, 'api-docs-index', {
    render: function (tokens, idx) {
      if (tokens[idx].nesting !== 1) {
        return '</div></div>'
      }

      return [
        '<div id="bfx-oss-docs-api-docs-index">',
        '<div id="bfx-oss-docs-api-docs-index__inner">'
      ].join('')
    }
  })
}

module.exports = registerExtension
