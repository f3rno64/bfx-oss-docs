'use strict'

const fs = require('fs')
const PI = require('p-iteration')
const _keys = require('lodash/keys')
const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _isUndefined = require('lodash/isUndefined')

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
  const { id, root, group, label, contentType } = definition
  const { output, structure } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output

  const md = getMD(config)
  const njk = getNunjucks(config)
  const groupSrcPath = `${__dirname}/../../${srcRoot}/${root}`
  const renderedPageMDData = {}
  let indexFilename = null

  await PI.forEach(group, async (entry) => {
    const { index, path, data = {}, id: entryID } = entry
    const mdPath = `${groupSrcPath}/${path}`
    const mdSrc = fs.readFileSync(mdPath, 'utf-8')
    let html = null

    if (_isEmpty(data)) {
      const {
        html: mdHTML,
        data: mdData
      } = await md.renderWithFrontMatter(mdSrc)

      Object.assign(data, mdData)
      html = mdHTML
    } else {
      html = md.render(mdSrc)
    }

    if (html === null || _isEmpty(html)) {
      throw new Error(`Rendered empty content for group entry: ${id}.${path}`)
    }

    const pageBuildFN = `page_${id}_${entryID}.html`

    if (!_isUndefined(renderedPageMDData[pageBuildFN])) {
      throw new Error(
        `Resolved duplicate page filename: ${pageBuildFN} (${id}.${path})`
      )
    }

    if (index) {
      indexFilename = pageBuildFN
    }

    renderedPageMDData[pageBuildFN] = {
      html,
      data
    }
  })

  if (indexFilename === null) {
    throw new Error(`Failed to resolve group index: ${id}`)
  }

  const menuData = genMenuData(config, indexFilename)
  const pageFileNames = _keys(renderedPageMDData)
  const sidebarMenuData = pageFileNames.map((pageFN) => {
    const { title, menuTitle } = renderedPageMDData[pageFN].data

    return {
      href: pageFN,
      label: menuTitle || title
    }
  })

  pageFileNames.forEach((pageFN) => {
    const { html, data } = renderedPageMDData[pageFN]
    const pageBuildPath = `${__dirname}/../../${buildPath}/${pageFN}`
    const htmlSrc = njk.render(LAYOUT, {
      fn: pageFN,
      sidebarMenuTitle: label,
      sidebarMenuData,
      menuData,
      contentType,
      html,
      data
    })

    const miniHTMLSrc = minifyHTML(htmlSrc)

    fs.writeFileSync(pageBuildPath, miniHTMLSrc)
  })
}

module.exports = renderPageGroup
