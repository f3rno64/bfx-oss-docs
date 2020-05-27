'use strict'

const fs = require('fs')
const PI = require('p-iteration')
const signale = require('signale')
const nunjucks = require('nunjucks')
const _keys = require('lodash/keys')
const _isEmpty = require('lodash/isEmpty')
const _isObject = require('lodash/isObject')
const { minify: minifyHTML } = require('html-minifier')
const { getMD, loadConfig } = require('../')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { output = {} } = config
  const { staticSite: staticSiteBuildPath, apiReferenceFN } = output
  const apiReferenceBuildPath = `${staticSiteBuildPath}/${apiReferenceFN}`
  const basePath = `${__dirname}/../_src/api/v2/ws`
  const includePath = `${__dirname}/../_includes`
  let sampleCount = 0

  signale.info(`Rendering API reference to ${apiReferenceBuildPath}`)

  const md = getMD(config)
  const nunjucksEnv = nunjucks.configure(includePath, {})
  const wsV2ReferenceDocuments = fs.readdirSync(basePath)
  const renderedDocuments = {}

  await PI.forEachSeries(wsV2ReferenceDocuments, async (folderName) => {
    const mdSrc = fs.readFileSync(`${basePath}/${folderName}/index.md`, 'utf-8')
    const { html, data } = await md.renderWithFrontMatter(mdSrc)
    const { id, title, subtitle, dataSamples } = data
    const samples = {}

    signale.info(`Rendered API reference document ${folderName} [${id}]`)

    if (_isObject(dataSamples) && !_isEmpty(dataSamples)) {
      _keys(dataSamples).forEach((sampleFN) => {
        const docID = id.split('-').slice(1).join('_')
        const sampleID = sampleFN.split('.')[0].replace(/-/g, '_')
        const type = sampleFN.split('.')[1]
        const sample = fs.readFileSync(`${basePath}/${docID}/${sampleFN}`, 'utf-8')
        const label = dataSamples[sampleFN]

        samples[sampleID] = {
          language: type,
          label: md.renderInline(label.trim()),
          html: md.render(`\`\`\`${type}\n${sample}\`\`\``)
        }

        signale.info(`Rendered API reference code sample ${sampleID}`)
        sampleCount += 1
      })
    }

    renderedDocuments[id] = {
      html,
      title,
      samples,
      subtitle
    }
  })

  const apiReferenceHTML = nunjucksEnv.render('layouts/api_reference.njk', {
    documents: renderedDocuments
  })

  const html = minifyHTML(apiReferenceHTML, { collapseWhitespace: true })
  fs.writeFileSync(apiReferenceBuildPath, html)

  const duration = Date.now() - startMTS

  signale.success([
    `Rendered API reference (${wsV2ReferenceDocuments.length} docs,`,
    `${sampleCount} code samples)`,
    `in ${duration}ms`
  ].join(' '))
}

try {
  run()
} catch (e) {
  signale.error('%s', e.stack)
}
