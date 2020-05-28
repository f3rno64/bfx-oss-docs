'use strict'

/**
 * A single image from a Readme.IO `[block:image]` data structure.
 *
 * @see module:bfx-oss-docs.RIOBlockImageData
 * @typedef {object} module:bfx-oss-docs.RIOImage
 * @property {Array} image - structure is [URL, filename, ?, ?, bgColor?] (we
 *   only use the URL field
 * @property {string} caption - caption
 */

/**
 * Readme.IO `[block:image]` data structure, as embedded in their markdown
 * export format. Contains an array of
 * {@link module:bfx-oss-docs.RIOImage|RIOImage} objects.
 *
 * @typedef {object} module:bfx-oss-docs.RIOBlockImageData
 * @property {module:bfx-oss-docs.RIOImage[]} images - array of images
 */
