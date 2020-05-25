'use strict'

const signale = require('signale')
const _isEmpty = require('lodash/isEmpty')
const _isArray = require('lodash/isArray')
const _isString = require('lodash/isString')
const _isObject = require('lodash/isObject')
const throwIfNoFile = require('../util/throw_if_no_file')

/**
 * Verifies a readme.io source section block is valid and all referenced files
 * are present on disk at the configured paths.
 *
 * @todo extract section as type (see {@link module:bfx-oss-docs.Config|Config}
 * @throws {Error} fails if any configured source file is missing or the
 *   section is somehow invalid
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @param {string} version - API version name
 * @param {object} section - readme.io section definition block
 * @param {boolean} log - enables signale logging
 */
const verifyReadmeIOSrcSection = (config, version, section, log) => {
  if (!_isObject(section) || _isEmpty(section)) {
    throw new Error('readmeIOData section not object or empty')
  }

  const { readmeIOData = {} } = config
  const { label, path, pages } = section
  const { root } = readmeIOData
  const l = path => log && signale.success('path %s exists', path)

  if (!_isString(label) || _isEmpty(label)) {
    throw new Error('readmeIOData section label not string or empty')
  } else if (!_isArray(pages) || _isEmpty(pages)) {
    throw new Error(`readmeIOData section ${label} pages not array or empty`)
  }

  const sectionPath = `${root}/${version}/${path}`

  throwIfNoFile(sectionPath)
  l(sectionPath)

  pages.forEach((page) => {
    if (_isObject(page)) { // label divider
      if (!_isString(page.label) || _isEmpty(page.label)) {
        throw new Error([
          `readmeIOData section ${label} contains object page with`,
          'non-string or empty label'
        ].join(' '))
      }
    } else {
      if (!_isString(page) || _isEmpty(page)) {
        throw new Error([
          `readmeIOData section ${label} contains non-string`,
          'or empty page filename'
        ].join(' '))
      }

      const pageFilePath = `${root}/${version}/${path}/${page}`
      throwIfNoFile(pageFilePath)
      l(pageFilePath)
    }
  })
}

module.exports = verifyReadmeIOSrcSection
