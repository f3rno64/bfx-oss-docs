'use strict'

const slugify = require('slugify')
const _isEmpty = require('lodash/isEmpty')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {object} data - code sample data
 * @param {number} index - sample index in a larger list of samples
 * @returns {object} fileDefinition
 */
const codeSampleDataToFileDef = (data, index) => {
  const { language, name, code } = data

  const ext = language === 'text' ? 'md' : language
  const slug = _isEmpty(name)
    ? `${index}`
    : slugify(name, {
      replacement: '_',
      lower: true,
      strict: true
    }) + `${index}`

  const id = `${language}_${slug}`

  return {
    id,
    name,
    language,
    filename: `${id}.${ext}`,
    content: code
  }
}

module.exports = codeSampleDataToFileDef
