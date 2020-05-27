'use strict'

/**
 * An object containing all data from a single exported readme.io markdown
 * file.
 *
 * @typedef {object} module:bfx-oss-docs.RIODocumentData
 * @property {string} title - document title, part of source front matter
 * @property {string} id - id of page, part of source front matter. Originally
 *   `slug`
 * @property {string} description - document subtitle, part of source front
 *   matter. Originally `excerpt`'
 * @property {Array<(
 *  module:bfx-oss-docs.RIOBlockCalloutData|
 *  module:bfx-oss-docs.RIOBlockMarkdownData|
 *  module:bfx-oss-docs.RIOBlockAPIHeaderData|
 *  module:bfx-oss-docs.RIOBlockParametersData|
 *  module:bfx-oss-docs.RIOBlockCodeData
 * )>} elements - array of block data structures
 */
