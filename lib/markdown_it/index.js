'use strict'

const MarkdownIt = require('markdown-it')
const _keys = require('lodash/keys')

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
  const { markdown = {} } = config
  const { parser, options, plugins = {} } = markdown

  if (parser !== 'markdown-it') {
    throw new Error(`Configured parser is not markdown-it: ${parser}`)
  }

  const md = MarkdownIt(options)

  _keys(plugins).forEach((pluginName) => {
    const plugin = require(pluginName)
    const pluginOptions = plugins[pluginName]

    md.use(plugin, pluginOptions)
  })

  return md
}

module.exports = getMD
