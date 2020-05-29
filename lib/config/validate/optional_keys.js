'use strict'

const _isObject = require('lodash/isObject')
const isArrayOfStrings = require('../../util/is_array_of_strings')

/**
 * An error will be thrown if the final config file has any of these paths, and
 * they fail the validation function.
 *
 * @memberof module:bfx-oss-docs
 * @type {object}
 * @constant
 * @readonly
 */
const OPTIONAL_KEYS = {
  assets: _isObject,

  scripts: _isObject,
  'scripts.babelConfig': _isObject,

  markdown: _isObject,

  'layouts.options': _isObject,

  styles: _isObject,
  'styles.config': _isObject,
  'styles.sources': _isObject,

  'markdown.options': _isObject,
  'markdown.plugins': _isObject,

  unifiedJSDoc: _isObject,
  'unifiedJSDoc.entryFallbacks': isArrayOfStrings,
  'unifiedJSDoc.entryForbidden': isArrayOfStrings,
  'projects.js': isArrayOfStrings
}

module.exports = OPTIONAL_KEYS
