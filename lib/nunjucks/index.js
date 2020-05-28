'use strict'

const nunjucks = require('nunjucks')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {NunjucksEnvironment} nj
 */
const getNunjucks = (config) => {
  const { layouts } = config
  const { includePath } = layouts

  return nunjucks.configure(includePath, {})
}

module.exports = getNunjucks
