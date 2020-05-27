'use strict'

/**
 * Thrown when a {@link module:bfx-oss-docs.RIOBlockCodeData|CODE block data}
 * object is attempted to be converted to `bfx-oss-data` native markdown;
 * should be caught and rendered manually if the render function in question is
 * markdown-only.
 *
 * Such code samples are written to individual files instead.
 *
 * This error is meant to be caught & handled!
 *
 * @memberof module:bfx-oss-docs
 * @class
 * @augments Error
 */
class RIOBlockIsSidebarCode extends Error {
  constructor () {
    super('RIO block is sidebar CODE')

    this.name = 'RIOBlockIsSidebarCode'
  }
}

module.exports = RIOBlockIsSidebarCode
