'use strict'

const fs = require('fs')
const _keys = require('lodash/keys')
const _isUndefined = require('lodash/isUndefined')
const parseRIOMarkdown = require('./parse_markdown')

/**
 * Parses all readme.io export data as defined in the supplied configuration,
 * returning an object with a matching structure containing RIO block data.
 *
 * NOTE: Page file names must be unique across entire structure; exported data
 *       respects this rule, hence it is enforced here.
 *
 * @see module:bfx-oss-docs.parseRIOMarkdown
 * @memberof module:bfx-oss-docs
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {object} data
 */
const parseRIOData = (config) => {
  const parsedData = {}
  const { readmeIOData } = config
  const { root, structure } = readmeIOData
  const rootPath = `${__dirname}/../../${root}`
  const versions = _keys(structure)

  versions.forEach((version) => {
    const versionPath = `${rootPath}/${version}`
    const versionStructure = structure[version]
    const { overview, documentation } = versionStructure
    const documentationPages = {}
    const overviewPages = {}

    // Documentation is converted to individual files like the overview
    // section, but eventually rendered as a single page. Hence, menu structure
    // differs.
    documentation.forEach((section) => {
      const { path, pages } = section
      const sectionPath = `${versionPath}/${path}`

      pages.forEach((pageFileName) => {
        if (!_isUndefined(documentationPages[pageFileName])) {
          throw new Error(`Page file name not unique: ${pageFileName}`)
        }

        const pageMD = fs.readFileSync(`${sectionPath}/${pageFileName}`)
        const pageData = parseRIOMarkdown(pageMD)
        const { slug: pageSlug } = pageData

        documentationPages[pageSlug] = pageData
      })
    })

    // Each overview page is rendered individually
    overview.forEach((section) => {
      const { path, pages } = section
      const sectionPath = `${versionPath}/${path}`

      pages.forEach((pageFileName) => {
        if (!_isUndefined(overviewPages[pageFileName])) {
          throw new Error(`Page file name not unique: ${pageFileName}`)
        }

        const pageMD = fs.readFileSync(`${sectionPath}/${pageFileName}`)
        const pageData = parseRIOMarkdown(pageMD)
        const { slug: pageSlug } = pageData

        overviewPages[pageSlug] = pageData
      })
    })

    parsedData[version] = {
      documentationPages,
      overviewPages
    }
  })

  return parsedData
}

module.exports = parseRIOData
