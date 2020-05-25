'use strict'

const fs = require('fs')

/**
 * @throws {Error} fails if no file exists at the specified path, or it
 *   contains malformed JSON.
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {string} path - path to target file relative to project root
 * @returns {object|Array} data
 */
const loadJSON = path => {
  const json = fs.readFileSync(`${__dirname}/../../${path}`)
  return JSON.parse(json)
}

module.exports = loadJSON
