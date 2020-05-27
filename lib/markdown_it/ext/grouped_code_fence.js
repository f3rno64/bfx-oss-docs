'use strict'

const { groupedCodeFencePlugin } = require('markdown-it-grouped-code-fence')

/**
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerGroupedCodeFenceExtension = (md) => {
  md.use(groupedCodeFencePlugin({
    className: {
      container: 'bfx-oss-docs-grouped-code-fence__container bfx-oss-docs-code-wrapper',
      navigationBar: 'bfx-oss-docs-grouped-code-fence__navigation-bar',
      fenceRadio: 'bfx-oss-docs-grouped-code-fence__fence-radio',
      labelRadio: 'bfx-oss-docs-grouped-code-fence__label-radio'
    }
  }))
}

module.exports = registerGroupedCodeFenceExtension
