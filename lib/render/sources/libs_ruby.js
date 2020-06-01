'use strict'

const buildLibsAny = require('./libs_any')

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {Promise} p
 */
const buildLibsRuby = async config => {
  return buildLibsAny('rb', config, (md) => {
    return `::: api-docs-index\n[[toc]]\n:::\n\n${md}`
  })
}

module.exports = buildLibsRuby
