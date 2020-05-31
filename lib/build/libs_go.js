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
const buildLibsGo = async config => buildLibsAny('go', config)

module.exports = buildLibsGo
