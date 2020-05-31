'use strict'

const SECTION_TYPES = require('./section_types')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.Config} config - site configuration
 * @returns {object[]} data
 */
const genMenuData = (config) => {
  const { structure } = config
  const { sections } = structure
  const pages = sections.filter(({ type }) => type === SECTION_TYPES.PAGE)

  return pages.map(({ id, filename, label }) => ({
    fn: filename || `page_${id}.html`,
    label
  }))
}

module.exports = genMenuData
