'use strict'

const matter = require('gray-matter')
const _isEmpty = require('lodash/isEmpty')
const _keys = require('lodash/keys')

const CONTENT_TYPE = require('./content_type')
const BLOCK_TRANSITIONS = require('./block_transitions')
const BLOCK_TRANSFORMERS = require('./block_transformers')

/**
 * Parses a readme.io exported markdown file, as identified by it's section and
 * page name pair in the supplied configuration object (necessary for
 * section-level metadata shared by multiple documents). Returns an object with
 * parsed data.
 *
 * @todo add typedef for return type (section data)
 * @throws {Error} fails if the file does not exist or fails to parse
 * @memberof module:bfx-oss-docs
 *
 * @param {string} mdString - readme.io export format markdown string
 * @returns {module:bfx-oss-docs.RIODocumentData} documentData
 */
const parseRIOMarkdown = (mdString) => {
  const { content, data } = matter(mdString)
  const { title, slug, excerpt, hidden } = data

  if (hidden) {
    throw new Error('RIO markdown source marked hidden, refusing parse')
  }

  const lines = content.split('\n')
  const documentData = {
    description: (excerpt || '').replace(/\n/g, ' '),
    slug: slug.replace(/-/g, '_'),
    id: slug,
    title
  }

  const elements = []
  const transitionTests = _keys(BLOCK_TRANSITIONS)

  let blockType = CONTENT_TYPE.MARKDOWN
  let blockContent = []

  for (let i = 0; i < lines.length; i += 1) {
    const l = lines[i].trim()

    let lineIsBlockMarker = false
    let blockTypeChanged = false
    let nextBlockType = null

    for (let j = 0; j < transitionTests.length; j += 1) {
      lineIsBlockMarker = new RegExp(transitionTests[j]).test(l)

      if (!lineIsBlockMarker) {
        continue
      }

      const detectedType = BLOCK_TRANSITIONS[transitionTests[j]]

      if (i === 0) { // initial type
        blockType = detectedType
      } else if (blockType !== detectedType) {
        blockTypeChanged = true
        nextBlockType = detectedType
      }

      break
    }

    if (!lineIsBlockMarker) {
      blockContent.push(l)
    }

    // Either block transition, or entire file was one block type
    if (blockTypeChanged || i === lines.length - 1) {
      if (!_isEmpty(blockContent)) {
        const content = BLOCK_TRANSFORMERS[blockType](blockContent)

        if (!_isEmpty(content)) {
          elements.push({ type: blockType, content })
        }
      }

      blockType = nextBlockType
      blockContent = (
        nextBlockType === CONTENT_TYPE.MARKDOWN && l !== '[/block]'
      ) ? [l] // Start of markdown is a valid content line
        : []
    }
  }

  documentData.elements = elements

  return documentData
}

module.exports = parseRIOMarkdown
