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
const _isObject = require('lodash/isObject')
const { loadConfig, parseRIOMarkdown } = require('../')

try {
  signale.warn('SKIPPING v1 SOURCES!')
  signale.success('rendering readme.io sources...')
  signale.info('loading config from %s...', CONFIG_FILENAME)

  const config = loadConfig(CONFIG_FILENAME)
  const { output = {}, readmeIOData = {} } = config
  const { convertedRIOAPIDocs: destRootPath } = output
  const { structure = {} } = readmeIOData
  const { v2 = {} } = structure
  const { documentation = [] } = v2

  documentation.forEach((section) => {
    const { label, path, pages } = section
    const apiType = /rest/.test(label.toLowerCase()) ? 'rest' : 'ws'

    pages.forEach((page) => {
      if (_isObject(page)) {
        return // ignore labels, intended for sidebar
      }

      const pageData = parseRIOMarkdown(path, page, config)
      const jsonFN = `${page.split('.')[0]}.json`
      const jsonData = JSON.stringify(pageData, null, 2)

      const destPath = (
        `${__dirname}/../${destRootPath}/v2/${apiType}/features/${jsonFN}`
      )

      // TODO: Decide on a better format
      fs.writeFileSync(destPath, jsonData)
      signale.success('wrote %s', destPath)
    })
  })
} catch (e) {
  signale.error('%s', e.stack)
}
