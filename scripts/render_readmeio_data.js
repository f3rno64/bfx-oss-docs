'use strict'

const CONFIG_FILENAME = 'config.json'

/**
 * Generates templates in the configured include path, and pages utilizing them
 * to reconstruct the readme.io page structure.
 *
 * @example
 * node scripts/render_readmeio_data.js
 */

const fs = require('fs')
const signale = require('signale')
const { loadConfig, renderV2APIDocumentation } = require('../')

try {
  signale.warn('SKIPPING v1 SOURCES!')
  signale.success('rendering readme.io sources...')
  signale.info('loading config from %s...', CONFIG_FILENAME)

  const config = loadConfig(CONFIG_FILENAME)
  const documentationNJK = renderV2APIDocumentation(config, true)
  // const destPath = `${__dirname}/../_includes/api_documentation/test.njk`
  const destPath = `${__dirname}/../_pages/readmeio_api_test.njk`

  fs.writeFileSync(destPath, documentationNJK)

  signale.success('wrote %s', destPath)
} catch (e) {
  signale.error('%s', e.stack)
}
