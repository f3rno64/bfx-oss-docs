'use strict'

const fs = require('fs')
const matter = require('gray-matter')
const _isObject = require('lodash/isObject')
const _isString = require('lodash/isString')
const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')
const _keys = require('lodash/keys')

const CONTENT_TYPE = require('./content_type')
const BLOCK_TRANSITIONS = require('./block_transitions')

// TODO: extract
const indentCode = (code) => {
  return code
}

const formatCode = (data) => {
  const { codes } = data

  if (_isArray(codes) && !_isEmpty(codes)) {
    codes.forEach((block) => {
      if (block.language !== 'text') {
        return
      }

      if (_isString(block.code) && !_isEmpty(block.code)) {
        block.code = block.code.trim()

        if (block.code[0] === '[') {
          block.code = indentCode(block.code)
        }
      }
    })
  }

  return data
}


const BLOCK_TRANSFORMER = {
  [CONTENT_TYPE.MARKDOWN]: v => v.join('\n'),
  [CONTENT_TYPE.CODE]: v => formatCode(JSON.parse(v.join(''))),
  [CONTENT_TYPE.CALLOUT]: v => JSON.parse(v.join('')),
  [CONTENT_TYPE.API_HEADER]: v => JSON.parse(v.join(''))
}

/**
 * @todo add typedef for return type (section data)
 * @throws {Error} fails if the file does not exist or fails to parse
 * @memberof module:bfx-oss-docs
 *
 * @param {string} sectionPath - relative to readmeio data root
 * @param {string} pageFileName - page file name relative to section path
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {object} sectionData
 */
const parseMarkdown = (sectionPath, pageFileName, config) => {
  const { readmeIOData = {} } = config
  const { root } = readmeIOData
  const mdString = fs.readFileSync(
    `${__dirname}/../../${root}/v2/${sectionPath}/${pageFileName}`, 'utf-8'
  )

  const { content, data } = matter(mdString)
  const { title, slug, excerpt, hidden } = data

  if (hidden) {
    throw new Error(`Tried to load hidden readme.io page (${pageFileName})`)
  }

  const lines = content.split('\n')
  const sectionData = {
    title,
    id: slug,
    description: excerpt
  }

  const elements = []
  const transitionTests = _keys(BLOCK_TRANSITIONS)

  let blockType = CONTENT_TYPE.MARKDOWN
  let blockContent = []

  for (let i = 0; i < lines.length; i += 1) {
    const l = lines[i].trim()

    let blockTypeChanged = false
    let nextBlockType = null

    for (let j = 0; j < transitionTests.length; j += 1) {
      if (new RegExp(transitionTests[j]).test(l)) {
        blockTypeChanged = true
        nextBlockType = BLOCK_TRANSITIONS[transitionTests[j]]
        break
      }
    }

    if (!blockTypeChanged) {
      blockContent.push(l)
    } else {
      if (!_isEmpty(blockContent)) {
        elements.push({
          type: blockType,
          content: BLOCK_TRANSFORMER[blockType](blockContent)
        })
      }

      blockType = nextBlockType
      blockContent = (
        nextBlockType === CONTENT_TYPE.MARKDOWN && l !== '[/block]'
      ) ? [l] // Start of markdown is a valid content line
        : []
    }
  }

  sectionData.elements = elements

  return sectionData
}

module.exports = parseMarkdown
