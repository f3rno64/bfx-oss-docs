'use strict'

const loadConfig = require('./lib/config/load')
const validateConfig = require('./lib/config/validate')
const renderUnifiedJSDocConfig = require('./lib/jsdoc/render_unified_config')
const verifyReadmeIOSrc = require('./lib/readmeio/verify_src')
const parseRIOData = require('./lib/readmeio/parse_data')
const parseRIOMarkdown = require('./lib/readmeio/parse_markdown')
const rioDocumentToNative = require('./lib/readmeio/doc_to_native')
const getMD = require('./lib/markdown_it')
const SECTION_TYPES = require('./lib/render/section_types')
const renderPage = require('./lib/render/page')
const renderPageGroup = require('./lib/render/page_group')
const renderPageGroupInline = require('./lib/render/page_group_inline')

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
  verifyReadmeIOSrc,
  parseRIOData,
  parseRIOMarkdown,
  rioDocumentToNative,
  renderPage,
  renderPageGroup,
  renderPageGroupInline,
  getMD
}
