'use strict'

const CONTENT_TYPE = require('./content_type')

/**
 * Map of regex strings to content types that follow their appearances.
 *
 * @memberof module:bfx-oss-docs
 * @enum {string}
 * @constant
 * @readonly
 */
const BLOCK_TRANSITIONS = {
  /**
   * Markdown may begin with an explicit header, or when an explicit block
   * ends, as any text is markdown.
   */
  '^\\*\\*': CONTENT_TYPE.MARKDOWN,

  /**
   * Code blocks contain one or more strings of code, tagged with a language
   * and title, and optionally flagged for rendering in the sidebar.
   */
  '^\\[block:code\\]$': CONTENT_TYPE.CODE,

  /**
   * Similar to CODE in that it is represented by a JS object, but is
   * meant to be displayed as a visually highlighted block of text.
   */
  '^\\[block:callout\\]$': CONTENT_TYPE.CALLOUT,

  /**
   * Similar to CODE, but renders as a minor header
   */
  '^\\[block:api\\-header\\]$': CONTENT_TYPE.API_HEADER,

  /**
   * The end of a block means markdown mode resumes
   */
  '^\\[\\/block\\]$': CONTENT_TYPE.MARKDOWN
}

module.exports = BLOCK_TRANSITIONS
