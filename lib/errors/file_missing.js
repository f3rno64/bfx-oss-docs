'use strict'

/**
 * Thrown when a required file is missing
 *
 * @memberof module:bfx-oss-docs
 * @class
 * @augments Error
 */
class FileMissingError extends Error {
  /**
   * @param {string} path - file path
   */
  constructor (path) {
    super(`Required file ${path} missing`)

    this.name = 'FileMissingError'
  }
}

module.exports = FileMissingError
