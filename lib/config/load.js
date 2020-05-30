'use strict'

const fs = require('fs')
const path = require('path')
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
  const configPath = path.join(__dirname, '/../../', filename)
  const configSrc = fs.readFileSync(configPath, 'utf-8')
  const configData = JSON.parse(configSrc)
  const config = {}

  Object.assign(config, defaultConfig)
  Object.assign(config, configData)

  // Throws on error!
  validateConfig(config)

  return config
}

module.exports = loadConfig
