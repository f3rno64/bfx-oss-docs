'use strict'

const _isString = require('lodash/isString')
const _isObject = require('lodash/isObject')

/**
 * An error will be thrown if the final config file is missing any of these
 * paths, or they fail the validation function
 *
 * @memberof module:bfx-oss-docs
 * @type {object}
 * @constant
 * @readonly
 */
const REQUIRED_KEY_VALUE_TYPES = {
  output: _isObject,
  'output.staticSite': _isString,
  'output.apiReferenceFN': _isString,
  'output.unifiedJSDocDist': _isString,
  'output.unifiedJSDocConfig': _isString,
  'output.convertedRIOAPIDocs': _isString,

  layouts: _isObject,
  'layouts.engine': _isString,
  'layouts.includePath': _isString,
  'layouts.pagesPath': _isString,

  markdown: _isObject,
  'markdown.parser': _isString,

  // TODO: Expand on this
  readmeIOData: _isObject,
  'readmeIOData.root': _isString,
  'readmeIOData.structure': _isObject,

  projects: _isObject,
  'projects.path': _isString
}

module.exports = REQUIRED_KEY_VALUE_TYPES
