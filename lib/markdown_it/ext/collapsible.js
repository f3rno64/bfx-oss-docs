'use strict'

const MarkdownItCollapsible = require('markdown-it-collapsible')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItCollapsible)
}

module.exports = registerExtension
