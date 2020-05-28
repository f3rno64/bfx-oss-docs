'use strict'

const PI = require('p-iteration')
const signale = require('signale')
const {
  SECTION_TYPES, loadConfig, renderPage, renderPageGroup, renderPageGroupInline
} = require('../')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { structure } = config
  const { sections } = structure

  await PI.forEach(sections, async (section) => {
    const { id, type } = section

    switch (type) {
      case SECTION_TYPES.PAGE: {
        await renderPage(section, config)
        break
      }

      case SECTION_TYPES.PAGE_GROUP: {
        await renderPageGroup(section, config)
        break
      }

      case SECTION_TYPES.PAGE_GROUP_INLINE: {
        await renderPageGroupInline(section, config)
        break
      }

      default: {
        throw new Error(`Unknown section type ${type}`)
      }
    }

    signale.success(`Rendered section ${id} (${type})`)
  })

  const duration = Date.now() - startMTS
  signale.success(`Rendered site content in ${duration}ms`)

  /*
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
          html: md.render(`\`\`\`${type}\n${sample}\n\`\`\``)
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
  */
}

try {
  run()
} catch (e) {
  signale.error('%s', e.stack)
}
