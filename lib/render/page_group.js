'use strict'

const fs = require('fs')
const _keys = require('lodash/keys')
const PI = require('p-iteration')
const getMD = require('../markdown_it')
const getNunjucks = require('../nunjucks')
const minifyHTML = require('./minify_html')
const genMenuData = require('./gen_menu_data')

// TODO: Move to config
const LAYOUT = 'layouts/page_group.njk'

/**
 * Renders a single page to the site dist path
 *
 * @todo create typedef for page def once structure is finalized
 * @todo add support for different layout parsers (or standardize to njk)
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {object} definition - page definition
 * @param {module:bfx-oss-docs.Config} config - site configuration
 */
const renderPageGroup = async (definition, config) => {
  const { id, root } = definition
  const { output, structure } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output

  const md = getMD(config)
  const njk = getNunjucks(config)
  const menuData = genMenuData(config)
  const groupSrcPath = `${__dirname}/../../${srcRoot}/${root}`
  const groupPageDirectories = fs.readdirSync(groupSrcPath)
  const renderedPageMDData = {}

  await PI.forEach(groupPageDirectories, async (folderName) => {
    const pageBuildFN = `page_${id}_${folderName}.html`
    const mdPath = `${groupSrcPath}/${folderName}/index.md`
    const mdSrc = fs.readFileSync(mdPath, 'utf-8')
    const { html, data } = await md.renderWithFrontMatter(mdSrc)

    renderedPageMDData[pageBuildFN] = {
      html,
      data
    }
  })

  const pageFileNames = _keys(renderedPageMDData)

  const sidebarMenuData = pageFileNames.map((pageFN) => ({
    href: pageFN,
    label: renderedPageMDData[pageFN].data.title
  }))

  pageFileNames.forEach((pageFN) => {
    const { html, data } = renderedPageMDData[pageFN]
    const pageBuildPath = `${__dirname}/../../${buildPath}/${pageFN}`
    const htmlSrc = njk.render(LAYOUT, {
      sidebarMenuData,
      menuData,
      html,
      data
    })

    const miniHTMLSrc = minifyHTML(htmlSrc)

    fs.writeFileSync(pageBuildPath, miniHTMLSrc)
  })
}

module.exports = renderPageGroup
