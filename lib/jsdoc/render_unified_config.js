'use strict'

const resolveIncludes = require('./resolve_includes')
const getUnifiedConfig = require('./get_unified_config')

/**
 * Generates a JSDoc config file to generate unified documentation for all
 * configured Bitfinex JavaScript projects.
 *
 * @memberof module:bfx-oss-docs
 *
 * @param {module:bfx-oss-docs.Config} config - configuration
 * @param {boolean} [asJSON] - if true, output will be JSON data
 * @returns {string} jsDocConfig - JSON string
 */
const renderUnifiedJSDocConfig = (config, asJSON) => {
  const { output = {} } = config
  const { unifiedJSDocDist, unifiedJSDocDistJSON } = output
  const includes = resolveIncludes(config)

  return getUnifiedConfig({
    json: asJSON ? unifiedJSDocDistJSON : null,
    output: unifiedJSDocDist,
    includes
  })
}

module.exports = renderUnifiedJSDocConfig
