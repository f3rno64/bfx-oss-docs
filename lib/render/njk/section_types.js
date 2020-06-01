'use strict'

/**
 * @memberof module:bfx-oss-docs
 * @enum {string}
 * @constant
 * @readonly
 */
const SECTION_TYPES = {
  /**
   * Single page
   */
  PAGE: 'page',

  /**
   * Library documentation; essentially a large page-group with multiple files
   * for each entry (and an accompanying menu). Each folder in the root path
   * must contain a 'config.json' file, with a 'language' string and 'files'
   * array in the order they should appear as. The first file is the library
   * index, and should be the README.
   */
  LIBRARIES: 'libraries'
}

module.exports = SECTION_TYPES
