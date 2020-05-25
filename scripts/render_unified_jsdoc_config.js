'use strict'

const CONFIG_FILENAME = 'config.json'

/**
 * Generates the unified JSDoc configuration file from the `config.json`
 * settings found in the project root. May fail with an error
 *
 * @todo move default unified JSDoc config options into actual project config
 * @example
 * node scripts/render_jsdoc_config.js
 */

const fs = require('fs')
const signale = require('signale')
const { loadConfig, renderUnifiedJSDocConfig } = require('../')

try {
  signale.success('starting render of unified JSDoc config file...')
  signale.info('loading config from %s...', CONFIG_FILENAME)
  const config = loadConfig(CONFIG_FILENAME)

  signale.info('rendering unified JSDoc config file...')
  const unifiedJSDocConfig = renderUnifiedJSDocConfig(config)

  unifiedJSDocConfig.source.include.forEach(includePath => (
    signale.success('including %s', includePath)
  ))

  const { output = {} } = config
  const { unifiedJSDocConfig: destination } = output
  const destinationPath = `${__dirname}/../${destination}`

  signale.info('writing unified JSDoc config to %s', destinationPath)

  fs.writeFileSync(destinationPath, JSON.stringify(unifiedJSDocConfig))
  signale.success('done!')
} catch (e) {
  signale.error('%s', e.stack)
}
