'use strict'

/**
 * Thrown when a resolved project entry, even after attempting configured
 * fallbacks, is forbidden by the active configuration.
 *
 * @memberof module:bfx-oss-docs
 * @class
 * @augments Error
 */
class ForbiddenProjectEntryError extends Error {
  /**
   * @param {string} entry - entry path
   */
  constructor (entry) {
    super(
      `Project entry ${entry} is forbidden and no alternative is available`
    )

    this.name = 'ForbiddenProjectEntryError'
  }
}

module.exports = ForbiddenProjectEntryError
