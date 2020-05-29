'use strict'

const MarkdownIt = require('markdown-it')
const extensions = require('./ext')

/**
 * @throws {Error} fails if the provided config object does not have
 *   `markdown-it` selected as the markdown parser.
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {MarkdownIt} md - configured base instance
 */
const getMD = (config) => {
  const { markdown: markdownConfig = {} } = config
  const md = MarkdownIt(markdownConfig)

  extensions.forEach(register => { register(md) })

  return md
}

module.exports = getMD
