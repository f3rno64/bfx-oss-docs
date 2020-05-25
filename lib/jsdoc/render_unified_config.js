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
 * @returns {string} jsDocConfig - JSON string
 */
const renderUnifiedJSDocConfig = (config) => {
  const { output = {} } = config
  const { unifiedJSDocDist } = output
  const includes = resolveIncludes(config)

  return getUnifiedConfig({
    output: unifiedJSDocDist,
    includes
  })
}

module.exports = renderUnifiedJSDocConfig
