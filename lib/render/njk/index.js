'use strict'

const PI = require('p-iteration')
const SECTION_TYPES = require('./section_types')
const renderLibraries = require('./libraries')
const renderPage = require('./page')

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @param {object[]} sections - sections
 * @returns {Promise} p
 */
const renderNJK = async (config, sections) => {
  const allPages = []
  const renderers = []

  await PI.forEach(sections, async (section) => {
    const { type } = section

    switch (type) {
      case SECTION_TYPES.PAGE: {
        const { pages, finalize } = await renderPage(section, config)
        allPages.push(...pages)
        renderers.push(finalize)
        break
      }

      case SECTION_TYPES.LIBRARIES: {
        const { pages, finalize } = await renderLibraries(section, config)
        allPages.push(...pages)
        renderers.push(finalize)
        break
      }

      default: {
        throw new Error(`Unknown section type ${type}`)
      }
    }
  })

  return PI.forEach(renderers, async (r) => {
    return r(allPages)
  })
}

module.exports = renderNJK
