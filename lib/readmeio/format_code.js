'use strict'

const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _isArray = require('lodash/isArray')

/**
 * @todo define type for data arg
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {object} data - parsed readmeio element object
 * @returns {object} data - code formatted in-place, same object
 */
const formatCode = (data) => {
  const { codes } = data

  if (_isArray(codes) && !_isEmpty(codes)) {
    codes.forEach((block) => {
      if (block.language !== 'text') {
        return
      }

      if (_isString(block.code) && !_isEmpty(block.code)) {
        block.code = block.code.trim()
      }
    })
  }

  return data
}

module.exports = formatCode
