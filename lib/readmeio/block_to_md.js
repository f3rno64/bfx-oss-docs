'use strict'

const _isEmpty = require('lodash/isEmpty')
const { nonce } = require('bfx-api-node-util')
const CONTENT_TYPE = require('./content_type')
const RIOBlockIsSidebarCode = require('../errors/rio_block_is_sidebar_code')

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

    case CONTENT_TYPE.IMAGE: {
      const { content = {} } = block
      const { images } = content

      // They use an array, but from current sources it always contains 1
      // image. Hence enforce here (otherwise we need a new render method,
      // carousel or so)
      if (images.length > 1) {
        throw new Error('Encountered image block w/ multiple images')
      }

      const { image, caption } = images[0]

      return `\n![${caption}](${image[0]})\n`
    }

    /**
     * NOTE: Exported data includes parameter blocks with headers at row 0
     * instead of 'h' row, detected below
     *
     * TODO: Either mimick rio table output, or refactor to new format
     *
     * As it is currently structured, the data contained in the parameters
     * block could be rendered in a better way. More importantly, it must be
     * easy to author in the source files. A simple table is insufficient as
     * the cells themselves also contain markdown, and any solution that
     * mimicks the readme.io output is difficult to work with at the source
     * file level.
     */
    case CONTENT_TYPE.PARAMETERS: {
      return ''

      /*
      const { content = {} } = block
      const { data, rows, cols } = content
      const elementCoordinates = _keys(data).map(c => {
        const coords = c.split('-')

        return {
          x: +coords[1],
          y: coords[0] === 'h' ? 'h' : +coords[0]
        }
      })

      let headerCoordinates = elementCoordinates.filter(c => c.y === 'h')

      // As noted above; some sources place headers on first content row, so we
      // fix the coordinates
      if (_isEmpty(headerCoordinates)) {
        elementCoordinates.forEach((coords) => {
          const { y } = coords

          if (y === 0) {
            coords.y = 'h'
          } else {
            coords.y -= 1
          }
        })

        headerCoordinates = elementCoordinates.filter(c => c.y === 'h')
      }

      // Check if headers repeat; if so, we render multiple tables next to each
      // other instead of a single mash-up (sanity)
      const headerLabelMap = {} // columnIndex: label
      const headerLabels = headerCoordinates.map(({ x }) => data[`h-${x}`])
      const headerLabelsRepeat = !!headerLabels.find((label, index) => (
        _includes(headerLabels.slice(index + 1), label)
      ))

      headerCoordinates.forEach(({ y }) => {
        headerLabelMap[`${y}`] = data[`h-${y}`]
      })
     */
    }

    default: {
      throw new Error(`Unknown block content type: ${type}`)
    }
  }
}

module.exports = rioBlockToMarkdown
