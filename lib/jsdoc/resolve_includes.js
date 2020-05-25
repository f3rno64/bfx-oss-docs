'use strict'

const resolveIncludesForProject = require('./resolve_includes_for_project')

/**
 * Returns an array of all configured unified JSDoc include paths.
 *
 * @throws {Error} fails if no includes are found for a configured project, or
 *   a malformed file is encountered (invalid JSON)
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {string[]} includes - JSDoc include paths, relative to project root
 */
const resolveIncludes = (config) => {
  const { projects = {} } = config
  const { js: jsProjects } = projects

  const includes = []

  jsProjects.forEach(project => (
    includes.push(...resolveIncludesForProject(project, config))
  ))

  return includes
}

module.exports = resolveIncludes
