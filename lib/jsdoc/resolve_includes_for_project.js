'use strict'

const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')

const loadJSON = require('../util/load_json')
const fileExists = require('../util/file_exists')
const FileMissingError = require('../errors/file_missing')
const ForbiddenProjectEntryError = require('../errors/forbidden_project_entry')
const isEntryForbidden = require('./is_entry_forbidden')

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
  const { entryFallbacks = [] } = unifiedJSDoc
  const { path } = projects
  const includes = []

  // First attempt to load the project's own JSDoc config file
  const jsDocConfigPath = `${path}/${project}/.jsdoc.json`

  // NOTE: JSON error allowed to bubble up
  if (fileExists(jsDocConfigPath)) {
    const jsdoc = loadJSON(jsDocConfigPath)
    const jsdocIncludes = (jsdoc.source || {}).include || []

    if (_isArray(jsdocIncludes)) {
      includes.push(...(jsdocIncludes.map(include => (
        `${path}/${project}/${include}`
      ))))
    }
  }

  if (!_isEmpty(includes)) {
    return includes
  }

  // Fall back on manifest entry/entry fallbacks if needed
  const manifestPath = `${path}/${project}/package.json`

  if (!fileExists(manifestPath)) {
    throw new FileMissingError(manifestPath)
  }

  // NOTE: JSON error allowed to bubble up
  const manifest = loadJSON(manifestPath)
  let { main: entry } = manifest

  // Attempt alternative entry file if required
  if (isEntryForbidden(entry, config)) {
    for (let i = 0; i < entryFallbacks.length; i += 1) {
      if (fileExists(`${path}/${project}/${entryFallbacks[i]}`)) {
        entry = entryFallbacks[i]
        break
      }
    }
  }

  // Verify final entry is valid
  if (isEntryForbidden(entry, config)) {
    throw new ForbiddenProjectEntryError(entry)
  }

  if (!_isString(entry) || _isEmpty(entry)) {
    throw new Error([
      `Project ${project} lacking JSDoc config, manifest entry`,
      'and fallbacks failed'
    ].join(', '))
  }

  const entryPath = `${path}/${project}/${entry}`

  if (!fileExists(entryPath)) {
    throw new FileMissingError(entryPath)
  }

  return [entryPath]
}

module.exports = resolveIncludesForProject
