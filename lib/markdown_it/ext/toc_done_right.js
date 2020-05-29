'use strict'

const MarkdownItTOCDoneRight = require('markdown-it-toc-done-right')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItTOCDoneRight, {
    containerClass: 'bfx-oss-docs-md-toc'
  })
}

module.exports = registerExtension
