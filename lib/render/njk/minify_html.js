'use strict'

const { minify } = require('html-minifier')

/**
 * @todo move minifier options to config object
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {string} html - source
 * @returns {string} miniHTML - minified html
 */
const minifyHTML = (html) => {
  return minify(html, { collapseWhitespace: true })
}

module.exports = minifyHTML
