'use strict'

const MarkdownItImageSize = require('markdown-it-imsize')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItImageSize, {
    autofill: false
  })
}

module.exports = registerExtension
