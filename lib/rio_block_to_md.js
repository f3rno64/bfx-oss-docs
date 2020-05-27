'use strict'

const _isEmpty = require('lodash/isEmpty')
const { nonce } = require('bfx-api-node-util')
const CONTENT_TYPE = require('./readmeio/content_type')
const RIOBlockIsSidebarCode = require('./errors/rio_block_is_sidebar_code')

// TODO: Extract
const renderSingleCodeSample = ({ code, language }, groupData) => ([
  `\`\`\`${language}${_isEmpty(groupData) ? '' : ` ${groupData}`}`,
  code,
  '```'
].join('\n'))

/**
 * Generates valid `bfx-oss-docs` markdown for a single parsed readme.io data
 * block. If given a code block, it will only be included in the markdown if
 * it is not intended for the sidebar; such code samples are written to
 * individual source files for later injection during the actual `bfx-oss-docs`
 * static site generation phase.
 *
 * @throws {Error} if given a CODE block
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {(
 *  module:bfx-oss-docs.RIOBlockCalloutData|
 *  module:bfx-oss-docs.RIOBlockMarkdownData|
 *  module:bfx-oss-docs.RIOBlockAPIHeaderData|
 *  module:bfx-oss-docs.RIOBlockParametersData|
 *  module:bfx-oss-docs.RIOBlockCodeData
 *  )} block - block
 *
 * @returns {string} md
 */
const rioBlockToMarkdown = (block) => {
  const { type } = block

  switch (type) {
    case CONTENT_TYPE.MARKDOWN: {
      const { content } = block
      return `\n${content}\n`
    }

    // Renders either a single fenced code block, or a series of grouped blocks
    // relying on the markdown-it-grouped-code-fence extension being present
    // and configured on the utilized renderer
    case CONTENT_TYPE.CODE: {
      const { content } = block
      const { sidebar, codes } = content

      // pass to renderRIOSidebarCodeBlock instead
      if (sidebar) {
        throw new RIOBlockIsSidebarCode()
      } else if (_isEmpty(codes)) {
        throw new Error('Given code block with no code samples')
      }

      if (codes.length === 1) {
        return renderSingleCodeSample(codes[0])
      }

      const groupID = nonce()

      return codes.map((sample) => {
        const { language, name } = sample
        const label = name || language // name key usually only for sidebar

        return renderSingleCodeSample(sample, `[${groupID}-${label}]`)
      }).join('\n\n')
    }

    // TODO: Decide on header level
    case CONTENT_TYPE.API_HEADER: {
      const { content = {} } = block
      const { title } = content

      return `\n### ${title}\n`
    }

    case CONTENT_TYPE.CALLOUT: {
      const { content = {} } = block
      const { type, title, body } = content

      return `\n::: callout ${type} ${title}\n${body}\n:::\n`
    }

    // TODO: after parsing/rendering pipeline complete
    case CONTENT_TYPE.PARAMETERS: {
      return ''
    }

    default: {
      throw new Error(`Unknown block content type: ${type}`)
    }
  }
}

module.exports = rioBlockToMarkdown
