'use strict'

const fs = require('fs')
const path = require('path')
const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')

/**
 * Returns an array of JSDoc include paths for the provided project name, given
 * a configuration object.
 *
 * Attempts to parse the project's own JSDoc config file & use the includes
 * listed there if available, otherwise falling back on the manifest entry
 * definition, and finally the configured entry fallbacks.
 *
 * @throws {Error} if a required file is not found or is malformed
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {string} project - project name, relative to `projects.path`
 *   configuration value
 * @param {module:bfx-oss-docs.Config} config - configuration
 * @returns {string[]} includes
 */
const resolveIncludesForProject = (project, config) => {
  const { unifiedJSDoc = {}, projects = {} } = config
  const { include: includeFallbacks = [] } = unifiedJSDoc
  const { root } = projects
  const jsDocConfigPath = `${__dirname}/../../${root}/${project}/.jsdoc.json`

  if (fs.existsSync(jsDocConfigPath)) {
    const jsdocConfigSrc = fs.readFileSync(jsDocConfigPath, 'utf-8')
    const jsdocConfig = JSON.parse(jsdocConfigSrc)
    const jsdocIncludes = (jsdocConfig.source || {}).include || []

    if (_isArray(jsdocIncludes) && !_isEmpty(jsdocIncludes)) {
      return jsdocIncludes.map(i => `${root}/${project}/${i}`)
    }
  }

  const includePaths = includeFallbacks
    .map(i => path.join(root, project, i))
    .filter(i => fs.existsSync(path.join(__dirname, '../../', i)))

  if (_isEmpty(includePaths)) {
    throw new Error(`No includes resolved for project ${project}`)
  }

  return includePaths
}

module.exports = resolveIncludesForProject
