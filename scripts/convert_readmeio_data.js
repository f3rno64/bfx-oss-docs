'use strict'

const CONFIG_FILENAME = 'config.json'

const fs = require('fs')
const signale = require('signale')
const _keys = require('lodash/keys')
const _values = require('lodash/values')
const {
  loadConfig, parseRIOData, rioDocumentToNative
} = require('../')

const mkdir = (path) => {
  fs.mkdirSync(path)
  signale.success(`mkdir ${path}`)
}

const renderPageSet = (set, basePath) => {
  set.forEach((pageData) => {
    const { files, slug } = pageData
    const pagePath = `${basePath}/${slug}`

    mkdir(pagePath)

    files.forEach(({ filename, content }) => {
      fs.writeFileSync(`${pagePath}/${filename}`, content)
      signale.success(`Rendered ${filename}`)
    })
  })
}

try {
  signale.warn('SKIPPING v1 SOURCES!')
  signale.info('loading config from %s...', CONFIG_FILENAME)

  const config = loadConfig(CONFIG_FILENAME)
  const { output } = config
  const { convertedRIOAPIDocs } = output
  const basePath = `${__dirname}/../${convertedRIOAPIDocs}`

  signale.info(`converting rio sources to native in ${convertedRIOAPIDocs}`)

  const data = parseRIOData(config)
  const versions = _keys(data)

  versions.forEach((v) => {
    const path = `${basePath}/${v}`
    const overviewPath = `${path}/overview`
    const referencePath = `${path}/reference`

    // Clean existing sources
    if (fs.existsSync(path)) {
      fs.rmdirSync(path, { recursive: true })
      signale.info(`Cleaned ${path}`)
    }

    // Create folder structure
    mkdir(path)
    mkdir(overviewPath)
    mkdir(referencePath)

    // Render native sources
    const {
      overviewPages,
      documentationPages
    } = data[v]

    const nativeDocs = _values(documentationPages).map(rioDocumentToNative)
    const nativeOverview = _values(overviewPages).map(rioDocumentToNative)

    renderPageSet(nativeDocs, referencePath)
    signale.success(`Rendered ${v} API reference sources`)

    renderPageSet(nativeOverview, overviewPath)
    signale.success(`Rendered ${v} API overview sources`)
  })
} catch (e) {
  signale.error('%s', e.stack)
}
