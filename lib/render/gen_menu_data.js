'use strict'

const SECTION_TYPES = require('./section_types')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.Config} config - site configuration
 * @returns {object[]} data
 */
const genMenuData = (config, currentPageFN) => {
  const { structure } = config
  const { sections } = structure

  return sections.map(({
    type, menuTitle, label, id, filename, group
  }) => {
    const pageID = type === SECTION_TYPES.PAGE_GROUP
      ? `${id}_${group.find(e => e.index).id}`
      : id

    const href = filename || `page_${pageID}.html`

    return {
      href,
      active: href === currentPageFN,
      label: menuTitle || label
    }
  })
}

module.exports = genMenuData
