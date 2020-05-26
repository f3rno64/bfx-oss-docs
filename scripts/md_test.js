'use strict'

const fs = require('fs')
const JSYAML = require('js-yaml')
const nunjucks = require('nunjucks')
const MarkdownItFrontMatter = require('markdown-it-front-matter')
const { minify: minifyHTML } = require('html-minifier')
const _isObject = require('lodash/isObject')
const _isEmpty = require('lodash/isEmpty')
const _keys = require('lodash/keys')
const { getMD, loadConfig } = require('../')

const config = loadConfig('config.json')
const md = getMD(config)

const basePath = `${__dirname}/../_src/api/reference/ws_v2/auth_funding_credits`
const includePath = `${__dirname}/../_includes`
const widgetPath = `${includePath}/widgets`

const nunjucksEnv = nunjucks.configure(includePath, {})
const dataSampleViewerTemplate = fs.readFileSync(
  `${widgetPath}/data_sample_viewer.njk`, 'utf-8'
)

const samples = []

md.use(MarkdownItFrontMatter, (yamlSrc) => {
  const data = JSYAML.safeLoad(yamlSrc)
  const { dataSamples } = data

  if (!_isObject(dataSamples) || _isEmpty(dataSamples)) {
    return
  }

  _keys(dataSamples).forEach((sampleFilename) => {
    const type = sampleFilename.split('.')[1]
    const sample = fs.readFileSync(`${basePath}/${sampleFilename}`, 'utf-8')
    const label = dataSamples[sampleFilename]

    samples.push({
      label,
      id: sampleFilename,
      html: md.render([
        `\`\`\`${type}`,
        sample,
        '```'
      ].join('\n'))
    })
  })
})

const testMDSrc = fs.readFileSync(`${basePath}/index.md`, 'utf-8')
const markdownHTML = md.render(testMDSrc)
const sampleViewerHTML = nunjucksEnv.renderString(dataSampleViewerTemplate, {
  samples
})

const finalAPIReferenceHTML = minifyHTML(markdownHTML + sampleViewerHTML, {
  collapseWhitespace: true
})

console.log(finalAPIReferenceHTML)
