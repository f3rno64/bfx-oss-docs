'use strict'

const fs = require('fs')

/**
 * Query if a file exists relative to the project root.
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {string} path - relative to project root
 * @returns {boolean} exists
 */
const fileExists = (path) => {
  try {
    fs.statSync(`${__dirname}/../../${path}`)
    return true
  } catch (e) {
    return false
  }
}

module.exports = fileExists
