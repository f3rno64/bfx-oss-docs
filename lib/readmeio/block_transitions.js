'use strict'

const CONTENT_TYPE = require('./content_type')

/**
 * Map of regex strings to content types that follow their appearances. For
 * information on the structure of each block, see
 * {@link module:bfx-oss-docs.README_IO_CONTENT_TYPE|Readme.IO Content Types}
 *
 * @memberof module:bfx-oss-docs
 * @enum {string}
 * @constant
 * @readonly
 */
const BLOCK_TRANSITIONS = {
  '^\\[block:code\\]$': CONTENT_TYPE.CODE,
  '^\\[block:callout\\]$': CONTENT_TYPE.CALLOUT,
  '^\\[block:api\\-header\\]$': CONTENT_TYPE.API_HEADER,
  '^\\[block:parameters\\]$': CONTENT_TYPE.PARAMETERS,
  '^\\[\\/block\\]$': CONTENT_TYPE.MARKDOWN
}

module.exports = BLOCK_TRANSITIONS
