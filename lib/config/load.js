'use strict'

const loadJSON = require('../util/load_json')
const defaultConfig = require('./default')
const validateConfig = require('./validate')

/**
 * Loads a JSON config file for the {@link module:bfx-oss-docs|bfx-oss-docs}
 * site generator, filling in defaults and performing validation prior to
 * returning the parsed object.
 *
 * @throws {Error} fails if the file is not found or fails validation
 * @memberof module:bfx-oss-docs
 *
 * @param {string} [filename='config.json'] - config filename, relative to
 *   project root
 * @returns {object} config
 */
const loadConfig = (filename) => {
  const userConfig = loadJSON(filename)
  const config = {}

  Object.assign(config, defaultConfig)
  Object.assign(config, userConfig)

  // Throws on error!
  validateConfig(config)

  return config
}

module.exports = loadConfig
