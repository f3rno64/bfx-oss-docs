'use strict'

const loadConfig = require('./lib/config/load')
const validateConfig = require('./lib/config/validate')
const renderUnifiedJSDocConfig = require('./lib/jsdoc/render_unified_config')
const getMD = require('./lib/markdown_it')
const SECTION_TYPES = require('./lib/render/section_types')
const renderPage = require('./lib/render/page')
const renderPageGroup = require('./lib/render/page_group')
const renderPageGroupInline = require('./lib/render/page_group_inline')
const renderAPIDocs = require('./lib/render/api_docs')

/**
 * Bitfinex documentation (static site generator & content)
 *
 * @todo organize exports once structure finalized
 * @todo extract static site generator as own module
 * @todo describe
 *
 * @license Apache-2.0
 * @module bfx-oss-docs
 */

module.exports = {
  SECTION_TYPES,
  loadConfig,
  validateConfig,
  renderUnifiedJSDocConfig,
  renderPage,
  renderPageGroup,
  renderPageGroupInline,
  renderAPIDocs,
  getMD
}
