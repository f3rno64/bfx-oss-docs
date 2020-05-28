'use strict'

/**
 * Readme.io content types; JSON data structures are parsed as-is, with the
 * exception of CODE elements which receive minor formatting on the internal
 * code strings, with the object structure remaining the same..
 *
 * @memberof module:bfx-oss-docs
 * @name module:bfx-oss-docs.README_IO_CONTENT_TYPE
 * @enum {string}
 * @constant
 * @readonly
 */
const CONTENT_TYPE = {
  /**
   * Markdown block, containing newlines
   */
  MARKDOWN: 'MARKDOWN',

  /**
   * Image block, containing one or more images with URL, filename, and
   * caption fields
   */
  IMAGE: 'IMAGE',

  /**
   * Has one or more code blocks, may be flagged for rendering in the sidebar
   */
  CODE: 'CODE',

  /**
   * JSON object meant to be displayed as a visually highlighted block of text.
   * See {@link module:bfx-oss-docs.RIOBlockCalloutData} for the original data
   * structure.
   */
  CALLOUT: 'CALLOUT',

  /**
   * JSON object representing a header
   */
  API_HEADER: 'API_HEADER',

  /**
   * JSON object representing a set of possible API endpoint field values
   * (enum); readme.io organizes it as a set of x/y table coordinate keys
   * mapped to label values.
   */
  PARAMETERS: 'PARAMETERS'
}

module.exports = CONTENT_TYPE
