'use strict'

const fs = require('fs')
const JSYAML = require('js-yaml')
const nunjucks = require('nunjucks')
const MarkdownItFrontMatter = require('markdown-it-front-matter')
const MarkdownItContainer = require('markdown-it-container')
const { minify: minifyHTML } = require('html-minifier')
const _isObject = require('lodash/isObject')
const _isEmpty = require('lodash/isEmpty')
const _keys = require('lodash/keys')
const { getMD, loadConfig } = require('../')

const config = loadConfig('config.json')
const md = getMD(config)

const wsV2ReferenceDocuments = [
  'auth_funding_credits',
  'auth_orders'
]

const basePath = `${__dirname}/../_src/api/reference/ws_v2`
const includePath = `${__dirname}/../_includes`

const nunjucksEnv = nunjucks.configure(includePath, {})
const renderedDocuments = {}

// NOTE: Front matter callback is fired prior to render completion
// NOTE: Hard coded for WSv2 docs only currently
md.use(MarkdownItFrontMatter, (yamlSrc) => {
  const data = JSYAML.safeLoad(yamlSrc)
  const { id, title, subtitle, dataSamples } = data

  if (!_isObject(dataSamples) || _isEmpty(dataSamples)) {
    return
  }

  const samples = {}

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
  })

  renderedDocuments[id] = {
    title,
    subtitle,
    samples
  }
})

md.use(MarkdownItContainer, 'callout', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting !== 1) {
      return '</div></div></div>'
    }

    const m = tokens[idx].info.trim().match(/^callout\s(\w*)\s(.*)$/)
    const type = md.utils.escapeHtml(m[1])
    const title = md.utils.escapeHtml(m[2])

    return [
      `<div class="bfx-oss-docs-callout ${type}">`,
      '<div class="bfx-oss-docs-callout__marker"><p>!</p></div>',
      '<div class="bfx-oss-docs-callout__content">',
      '<div class="bfx-oss-docs-callout__header">',
      `<p>${title}</p><h4>${type}</h4>`,
      '</div>',
      '<div class="bfx-oss-docs-callout__body">'
    ].join('')
  }
})

wsV2ReferenceDocuments.forEach((filename) => {
  const mdSrc = fs.readFileSync(`${basePath}/${filename}/index.md`, 'utf-8')
  const markdownHTML = md.render(mdSrc)
  const id = `ws-${filename.split('_').join('-')}`

  renderedDocuments[id].html = markdownHTML
})

const apiReferenceHTML = nunjucksEnv.render('layouts/api_reference.njk', {
  documents: renderedDocuments
})

const html = minifyHTML(apiReferenceHTML, {
  collapseWhitespace: true
})

const { output = {} } = config
const { apiReference: apiReferenceBuildPath } = output

fs.writeFileSync(`${__dirname}/../${apiReferenceBuildPath}`, html)
