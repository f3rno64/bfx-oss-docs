
'use strict'

const signale = require('signale')
const { loadConfig, buildLibsRuby } = require('../')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')

  await buildLibsRuby(config)

  const duration = Date.now() - startMTS
  signale.success(`Rendered ruby libraries in ${duration}ms`)
}

run().catch((e) => {
  signale.error('%s', e.stack)
})
