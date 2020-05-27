'use strict'

const _flatten = require('lodash/flatten')
const _isEmpty = require('lodash/isEmpty')
const CONTENT_TYPE = require('./readmeio/content_type')
const processRIOSidebarCodeSamples = require('./process_rio_sidebar_code_samples')
const rioBlockToMarkdown = require('./rio_block_to_md')

/**
 * Converts a parsed RIO data object to `bfx-oss-docs` native markdown.
 *
 * @todo add typedef for returned object
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.RIODocumentData} data - data
 * @returns {object} nativeData
 */
const rioDocumentToNative = (data) => {
  const { title, id, description, elements } = data
  const nativeData = {
    id: id.replace(/-/g, '_'),
    title,
    description,
    files: []
  }

  const mdLines = [
    '---',
    `id: ${id}`,
    `title: ${title}`,
    `subtitle: ${description}`
  ]

  // Handle sidebar code samples; files generated elsewhere, but referenced in
  // document front matter
  const sidebarBlocks = []
  const inlineBlocks = []

  elements.forEach((elm) => {
    const { type, content } = elm
    const { sidebar } = content

    if (
      (type === CONTENT_TYPE.CODE) &&
      (sidebar === true)
    ) {
      sidebarBlocks.push(elm)
    } else {
      inlineBlocks.push(elm)
    }
  })

  // Add sample file references to front matter
  if (!_isEmpty(sidebarBlocks)) {
    const sidebarCodeBlocks = sidebarBlocks.map(processRIOSidebarCodeSamples)
    mdLines.push('dataSamples:')

    sidebarCodeBlocks.forEach((samples) => {
      samples.forEach((sample) => {
        const { filename, name } = sample

        nativeData.files.push(sample)
        mdLines.push(`  ${filename}: ${name}`)
      })
    })
  }

  mdLines.push('---') // end front matter, start of content

  mdLines.push(...(_flatten(inlineBlocks.map((block) => {
    return rioBlockToMarkdown(block).split('\n')
  }))))

  nativeData.files.push({
    id: '_',
    name: '_',
    language: 'md',
    filename: 'index.md',
    content: mdLines.join('\n')
  })

  return nativeData
}

module.exports = rioDocumentToNative
