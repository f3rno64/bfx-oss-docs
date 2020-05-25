'use strict'

const fileExists = require('./file_exists')
const FileMissingError = require('../errors/file_missing')

/**
 * Throws a {@link module:bfx-oss-docs.FileMissingError|FileMissingError} if
 * the path does not exist on disk.
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @throws {Error} fails if path does not exist
 * @param {string} path - relative to project root
 */
const throwIfNoFile = (path) => {
  if (!fileExists(path)) {
    throw new FileMissingError(path)
  }
}

module.exports = throwIfNoFile
