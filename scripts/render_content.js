'use strict'

const PI = require('p-iteration')
const signale = require('signale')
const { loadConfig, renderNJK } = require('../')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { structure } = config
  const { sections } = structure

  await renderNJK(config, sections)

  const duration = Date.now() - startMTS
  signale.success(`Rendered site content in ${duration}ms`)
}

run().catch((e) => {
  signale.error('%s', e.stack)
})
