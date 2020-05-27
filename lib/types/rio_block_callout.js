'use strict'

/**
 * Readme.IO `[block:callout]` data structure, as embedded in their markdown
 * export format. Represents a highlighted visual block of text with a title,
 * and highlight color varying by type.
 *
 * @typedef {object} module:bfx-oss-docs.RIOBlockCalloutData
 * @property {string} type - 'warning', 'info', 'error', or 'success'
 * @property {string} title - title (markdown)
 * @property {string} body - body (markdown)
 */
