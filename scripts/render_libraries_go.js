'use strict'

const signale = require('signale')
const { loadConfig, buildLibsGo } = require('../')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')

  await buildLibsGo(config)

  const duration = Date.now() - startMTS
  signale.success(`Rendered go libraries in ${duration}ms`)
}

run().catch((e) => {
  signale.error('%s', e.stack)
})
