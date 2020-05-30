'use strict'

const fs = require('fs')
const getJSDocModulesData = require('../../jsdoc/data/modules')

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {object} definition - definition
 * @param {module:bfx-oss-docs.Config} config - site configuration
 */
const renderJSDocAPIDocs = async (definition, config) => {
  const { root } = definition
  const { structure } = config
  const { root: srcRoot } = structure
  const jsdocSrcPath = `${__dirname}/../../../${srcRoot}/${root}`
  const jsdocSrc = fs.readFileSync(jsdocSrcPath, 'utf-8')
  const jsdocData = JSON.parse(jsdocSrc)
  const modulesData = getJSDocModulesData(jsdocData)

  return modulesData
}

module.exports = renderJSDocAPIDocs
