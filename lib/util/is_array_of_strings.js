'use strict'

const _isArray = require('lodash/isArray')
const _isString = require('lodash/isString')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {string[]} v - array of strings (or not)
 * @returns {boolean} isArrayOfStrings
 */
const isArrayOfStrings = v => (
  _isArray(v) && !v.find(str => !_isString(str))
)

module.exports = isArrayOfStrings
