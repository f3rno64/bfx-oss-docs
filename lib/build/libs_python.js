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
const buildLibsPython = async config => buildLibsAny('py', config)

module.exports = buildLibsPython
