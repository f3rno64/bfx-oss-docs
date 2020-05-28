'use strict'

const fs = require('fs')
const PI = require('p-iteration')
const _keys = require('lodash/keys')
const _isEmpty = require('lodash/isEmpty')
const _isObject = require('lodash/isObject')
const genMenuData = require('./gen_menu_data')

const getMD = require('../markdown_it')
const getNunjucks = require('../nunjucks')
const minifyHTML = require('./minify_html')

// TODO: Move to config
const LAYOUT = 'layouts/page_group_inline.njk'

/**
 * Renders a set of pages as a single HTML file with a sidebar sub-menu listing
 * each page as a content section.
 *
 * @todo create typedef for def once structure is finalized
 * @todo add support for different layout parsers (or standardize to njk)
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {object} definition - inline page group definition
 * @param {module:bfx-oss-docs.Config} config - site configuration
 */
const renderPageGroupInline = async (definition, config) => {
  const { id, root, filename, label } = definition
  const { output, structure } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output

  const md = getMD(config)
  const njk = getNunjucks(config)
  const menuData = genMenuData(config)
  const pageBuildFN = filename || `page_${id}.html`
  const pageBuildPath = `${__dirname}/../../${buildPath}/${pageBuildFN}`
  const groupSrcPath = `${__dirname}/../../${srcRoot}/${root}`
  const groupPageDirectories = fs.readdirSync(groupSrcPath)
  const renderedPages = {}

  await PI.forEachSeries(groupPageDirectories, async (folderName) => {
    const mdPath = `${groupSrcPath}/${folderName}/index.md`
    const mdSrc = fs.readFileSync(mdPath, 'utf-8')
    const { html, data } = await md.renderWithFrontMatter(mdSrc)
    const { id, title, subtitle, dataSamples } = data
    const samples = {}

    if (_isObject(dataSamples) && !_isEmpty(dataSamples)) {
      _keys(dataSamples).forEach((sampleFN) => {
        const sampleID = sampleFN.split('.')[0].replace(/-/g, '_')
        const type = sampleFN.split('.')[1]
        const samplePath = `${groupSrcPath}/${folderName}/${sampleFN}`
        const sample = fs.readFileSync(samplePath, 'utf-8')
        const label = dataSamples[sampleFN]

        samples[sampleID] = {
          language: type,
          label: md.renderInline(label.trim()),
          html: md.render(`\`\`\`${type}\n${sample}\n\`\`\``)
        }
      })
    }

    renderedPages[id] = {
      html,
      title,
      samples,
      subtitle
    }
  })

  const htmlSrc = njk.render(LAYOUT, {
    title: label,
    pages: renderedPages,
    filename: pageBuildFN,
    menuData
  })

  const miniHTMLSrc = minifyHTML(htmlSrc)

  fs.writeFileSync(pageBuildPath, miniHTMLSrc)
}

module.exports = renderPageGroupInline
