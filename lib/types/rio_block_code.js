'use strict'

/**
 * A single code sample from a Readme.IO `[block:code]` data structure.
 *
 * @see module:bfx-oss-docs.RIOBlockCodeData
 * @typedef {object} module:bfx-oss-docs.RIOCodeSnippet
 * @property {string} code - code sample as string
 * @property {string} language - sample language ID, i.e. 'json'
 * @property {string} name - label, i.e. to render as tab title in a tabbed
 *   container with multiple samples.
 */

/**
 * Readme.IO `[block:code]` data structure, as embedded in their markdown
 * export format. Represents **one or more** code samples, in potentially
 * varing languages, meant to be rendered either inline or in a sidebar.
 *
 * @typedef {object} module:bfx-oss-docs.RIOBlockCodeData
 * @property {module:bfx-oss-docs.RIOCodeSnippet[]} codes - array of code
 *   samples, to be displayed in a tabbed container or equivalent (mutually
 *   exclusive rendering is implied)
 * @property {boolean} sidebar - if true, the code samples should be rendered
 *   in a sidebar next to content, otherwise inline.
 */
