'use strict'

const _isEmpty = require('lodash/isEmpty')
const _isArray = require('lodash/isArray')
const _isString = require('lodash/isString')
const _isObject = require('lodash/isObject')
const _includes = require('lodash/includes')

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
  'output.unifiedJSDocDist': _isString,
  'output.unifiedJSDocConfig': _isString,

  layouts: _isObject,
  'layouts.engine': _isString,
  'layouts.includePath': _isString,
  'layouts.pagesPath': _isString,

  markdown: _isObject,
  'markdown.parser': _isString,

  projects: _isObject,
  'projects.path': _isString,

  structure: _isObject,
  'structure.root': v => _isString(v) && !_isEmpty(v),
  'structure.sections': v => _isArray(v) && !_includes(v, s => !_isObject(s))
}

module.exports = REQUIRED_KEY_VALUE_TYPES
