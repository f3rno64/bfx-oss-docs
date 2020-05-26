'use strict'

const loadConfig = require('./lib/config/load')
const validateConfig = require('./lib/config/validate')
const renderUnifiedJSDocConfig = require('./lib/jsdoc/render_unified_config')
const verifyReadmeIOSrc = require('./lib/readmeio/verify_src')
const renderV2APIDocumentation = require('./lib/readmeio/render_v2_api_documentation')
const parseRIOMarkdown = require('./lib/readmeio/parse_markdown')
const getMD = require('./lib/markdown_it')

/**
 * Bitfinex documentation (static site generator & content)
 *
 * @todo extract static site generator as own module
 * @todo describe
 *
 * @license Apache-2.0
 * @module bfx-oss-docs
 */

module.exports = {
  loadConfig,
  validateConfig,
  renderUnifiedJSDocConfig,
  verifyReadmeIOSrc,
  renderV2APIDocumentation,
  parseRIOMarkdown,
  getMD
}
