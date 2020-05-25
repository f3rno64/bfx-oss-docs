'use strict'

/**
 * Readme.io content types
 *
 * @memberof module:bfx-oss-docs
 * @enum {string}
 * @constant
 * @readonly
 */
const CONTENT_TYPE = {
  /** Markdown block, containing newlines **/
  MARKDOWN: 'MARKDOWN',

  /**
   * Has one or more code blocks, may be flagged for rendering in the sidebar
   */
  CODE: 'CODE',

  /**
   * Similar to CODE in that it is represented by a JS object, but is
   * meant to be displayed as a visually highlighted block of text.
   */
  CALLOUT: 'CALLOUT',

  /**
   * Similar to CODE, but renders as a minor header
   */
  API_HEADER: 'API_HEADER'
}

module.exports = CONTENT_TYPE
