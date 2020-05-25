'use strict'

/**
 * Default configuration options, overidden by the actual config file.
 *
 * @todo create typedef with all possible options
 *
 * @readonly
 * @constant
 * @memberof module:bfx-oss-docs
 * @type {object}
 */
const DefaultConfig = {
  output: {
    jsdoc_conf: '.jsdoc-merged.json'
  },

  layouts: {
    engine: 'nunjucks',
    include_path: '_includes',
    pages_path: '_pages'
  },

  markdown: {
    parser: 'markdown-it'
  }
}

module.exports = DefaultConfig
