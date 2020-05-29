'use strict'

const MarkdownItTaskLists = require('markdown-it-task-lists')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerExtension = (md) => {
  md.use(MarkdownItTaskLists)
}

module.exports = registerExtension
