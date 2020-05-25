'use strict'

const CONFIG_FILENAME = 'config.json'

/**
 * Verifies that all configured readme.io source files are present as
 * configured.
 *
 * @example
 * node scripts/verify_readmeio_data.js
 */

const signale = require('signale')
const { loadConfig, verifyReadmeIOSrc } = require('../')

try {
  signale.warn('SKIPPING v1 SOURCES!')
  signale.success('verifying readme.io sources...')
  signale.info('loading config from %s...', CONFIG_FILENAME)
  const config = loadConfig(CONFIG_FILENAME)

  verifyReadmeIOSrc(config, true)
} catch (e) {
  signale.error('%s', e.stack)
}
