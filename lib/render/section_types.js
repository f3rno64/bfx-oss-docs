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
   * A group of pages with a menu in the sidebar for navigation
   */
  PAGE_GROUP: 'page-group',

  /**
   * A group of pages rendered into a single file, with a menu in the sidebar
   * for navigation
   */
  PAGE_GROUP_INLINE: 'page-group-inline'
}

module.exports = SECTION_TYPES
