'use strict'

const MarkdownItHighlightJS = require('markdown-it-highlightjs')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItHighlightJS, {
    auto: true,
    code: true
  })
}

module.exports = registerExtension
