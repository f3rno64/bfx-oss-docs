'use strict'

const MarkdownItAnchor = require('markdown-it-anchor')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItAnchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '§'
  })
}

module.exports = registerExtension
