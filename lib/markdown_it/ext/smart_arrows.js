'use strict'

const MarkdownItSmartArrows = require('markdown-it-smartarrows')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItSmartArrows)
}

module.exports = registerExtension
