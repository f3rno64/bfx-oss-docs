'use strict'

const loadConfig = require('./lib/config/load')
const validateConfig = require('./lib/config/validate')
const getMD = require('./lib/markdown_it')
const renderNJK = require('./lib/render/njk')
const buildLibsGo = require('./lib/render/sources/libs_go')
const buildLibsRuby = require('./lib/render/sources/libs_ruby')
const buildLibsPython = require('./lib/render/sources/libs_python')

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
  loadConfig,
  validateConfig,
  renderNJK,
  buildLibsGo,
  buildLibsRuby,
  buildLibsPython,
  getMD
}
