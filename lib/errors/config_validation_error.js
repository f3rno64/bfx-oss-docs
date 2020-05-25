'use strict'

/**
 * Thrown due to a configuration error; message contains details.
 *
 * @memberof module:bfx-oss-docs
 * @class
 * @augments Error
 */
class ConfigValidationError extends Error {
  /**
   * @param {string} message - message
   */
  constructor (message) {
    super(message)

    this.name = 'ConfigValidationError'
  }
}

module.exports = ConfigValidationError
