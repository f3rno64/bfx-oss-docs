'use strict'

const signale = require('signale')
const { loadConfig, buildLibsPython } = require('../')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')

  await buildLibsPython(config)

  const duration = Date.now() - startMTS
  signale.success(`Rendered python libraries in ${duration}ms`)
}

run().catch((e) => {
  signale.error('%s', e.stack)
})
