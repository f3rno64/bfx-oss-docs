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

  return sections.map(({ type, label, id, filename, groupIndex }) => ({
    label,
    href: type === SECTION_TYPES.PAGE_GROUP
      ? `page_${id}_${groupIndex}.html`
      : filename || `page_${id}.html`
  }))
}

module.exports = genMenuData
