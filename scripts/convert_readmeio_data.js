'use strict'

const CONFIG_FILENAME = 'config.json'

const fs = require('fs')
const signale = require('signale')
const _uniq = require('lodash/uniq')
const _values = require('lodash/values')
const _includes = require('lodash/includes')
const {
  loadConfig, parseRIOAPIDocumentation, rioDocumentToNative,
} = require('../')

try {
  signale.warn('SKIPPING v1 SOURCES!')
  signale.info('loading config from %s...', CONFIG_FILENAME)

  const config = loadConfig(CONFIG_FILENAME)
  const { output } = config
  const { convertedRIOAPIDocs, apiReferenceFN } = output
  const basePath = `${__dirname}/../${convertedRIOAPIDocs}`

  signale.info(`converting rio sources to native in ${convertedRIOAPIDocs}`)

  const version = 2
  const data = parseRIOAPIDocumentation(`v${version}`, config)
  const { documentation /*, overview */ } = data
  const endpointDocs = _values(documentation).map(rioDocumentToNative)

  // TODO: Hardcoded for now
  const versions = [version]
  const types = _uniq(endpointDocs.map(({ id }) => id.split('_')[0]))

  // Cleanup existing docs
  versions.forEach((v) => {
    const path = `${basePath}/v${v}`

    try {
      fs.statSync(path)
      fs.rmdirSync(path, { recursive: true })
      signale.info(`Removed ${path}`)
    } catch (e) {
      signale.info(`${path} clean (${e.message})`)
    }
  })

  // Create base folder structure
  versions.forEach((v) => {
    const versionPath = `${basePath}/v${v}`

    fs.mkdirSync(versionPath)
    signale.success(`mkdir ${versionPath}`)

    types.forEach((type) => {
      const typePath = `${versionPath}/${type}`

      fs.mkdirSync(typePath)
      signale.success(`mkdir ${typePath}`)
    })
  })

  // TODO: Generate sidebar menu here as well
  const sidebarLinks = []

  // TODO: Refactor, for now cleanup is for multiple versions/types but only
  // v2 is parsed/rendered
  endpointDocs.forEach((endpointDocumentation) => {
    const { id, title, files } = endpointDocumentation
    const type = _includes(id, 'rest_') ? 'rest' : 'ws'
    const endpointDocFolder = id.replace(`${type}_`, '')
    const endpointDocPath = `${basePath}/v2/${type}/${endpointDocFolder}`

    fs.mkdirSync(endpointDocPath)
    signale.info(`mkdir ${endpointDocPath}`)

    sidebarLinks.push({
      id,
      label: title,
      path: `/${apiReferenceFN}.html#${id}`
    })

    files.forEach(({ filename, content }) => {
      const filePath = `${endpointDocPath}/${filename}`

      fs.writeFileSync(filePath, content)
      signale.success(`Rendered v2/${type}/${filename}`)
    })
  })
} catch (e) {
  signale.error('%s', e.stack)
}
