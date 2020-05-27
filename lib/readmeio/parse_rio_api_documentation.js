'use strict'

const _isObject = require('lodash/isObject')
const parseRIOMarkdown = require('./parse_rio_markdown')
// const renderContentElement = require('./render_content_element')

/**
 * @todo refactor!
 * @memberof module:bfx-oss-docs
 *
 * @param {string} version - key on configured structure ('v1' or 'v2')
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {string} njk - template output
 */
const parseRIOAPIDocumentation = (version, config) => {
  const { readmeIOData = {} } = config
  const { structure = {} } = readmeIOData
  const apiSourceMetadata = structure[version]

  if (!_isObject(apiSourceMetadata)) {
    throw new Error(`Version ${version} has no structure configuration`)
  }

  const { documentation = [] } = apiSourceMetadata
  const result = {
    documentation: {},
    overview: {} // TODO
  }

  documentation.forEach((section) => {
    const { path, pages } = section

    pages.forEach((pageFileName) => {
      const data = parseRIOMarkdown(path, pageFileName, config)

      result.documentation[pageFileName] = data
    })
  })

  return result
}

module.exports = parseRIOAPIDocumentation
