'use strict'

const _get = require('lodash/get')
const _keys = require('lodash/keys')
const _isEmpty = require('lodash/isEmpty')

const ConfigValidationError = require('../../errors/config_validation_error')
const REQUIRED_KEYS = require('./required_keys')
const OPTIONAL_KEYS = require('./optional_keys')

/**
 * Checks the provided config object against the internal set of required and
 * optional field types.
 *
 * @memberof module:bfx-oss-docs
 * @throws {Error} fails if a required field is missing, fails validation, or
 *   an optional field is present and fails validation.
 *
 * @param {module:bfx-oss-docs.Config} config - configuration object
 */
const validateConfig = config => {
  _keys(REQUIRED_KEYS).forEach((path) => {
    const value = _get(config, path)

    if (_isEmpty(value)) {
      throw new ConfigValidationError(`Required path ${path} missing or empty`)
    } else {
      const validator = REQUIRED_KEYS[path]

      if (!validator(value)) {
        throw new ConfigValidationError(
          `Required path ${path} failed validation`
        )
      }
    }
  })

  _keys(OPTIONAL_KEYS).forEach((path) => {
    const value = _get(config, path)

    if (!_isEmpty(value)) {
      const validator = OPTIONAL_KEYS[path]

      if (!validator(value)) {
        throw new ConfigValidationError(
          `Optional path ${path} failed validation`
        )
      }
    }
  })
}

module.exports = validateConfig
