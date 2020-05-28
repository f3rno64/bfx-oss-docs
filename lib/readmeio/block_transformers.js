'use strict'

const CONTENT_TYPE = require('./content_type')
const formatCode = require('./format_code')

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @constant
 * @readonly
 */
const BLOCK_TRANSFORMERS = {
  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {string} md - single markdown string containing '\n' line breaks
   */
  [CONTENT_TYPE.MARKDOWN]: v => v.join('\n'),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:bfx-oss-docs.RIOBlockCodeData} data
   */
  [CONTENT_TYPE.CODE]: v => formatCode(JSON.parse(v.join(''))),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:bfx-oss-docs.RIOBlockCalloutData} data
   */
  [CONTENT_TYPE.CALLOUT]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:bfx-oss-docs.RIOBlockImageData} data
   */
  [CONTENT_TYPE.IMAGE]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:bfx-oss-docs.RIOBlockAPIHeaderData} data
   */
  [CONTENT_TYPE.API_HEADER]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:bfx-oss-docs.RIOBlockParametersData} data
   */
  [CONTENT_TYPE.PARAMETERS]: v => JSON.parse(v.join(''))
}

module.exports = BLOCK_TRANSFORMERS
