'use strict'

const fs = require('fs')
const getMD = require('../markdown_it')
const getNunjucks = require('../nunjucks')
const minifyHTML = require('./minify_html')
const genMenuData = require('./gen_menu_data')

// TODO: Move to config
const LAYOUT = 'layouts/page.njk'

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
const renderPage = async (definition, config) => {
  const { id, root, filename, path } = definition
  const { output, structure } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output

  const md = getMD(config)
  const njk = getNunjucks(config)
  const menuData = genMenuData(config)
  const pageSrcPath = `${__dirname}/../../${srcRoot}/${root}/${path || 'index.md'}`
  const pageBuildFN = filename || `page_${id}.html`
  const pageBuildPath = `${__dirname}/../../${buildPath}/${pageBuildFN}`
  const pageSrc = fs.readFileSync(pageSrcPath, 'utf-8')

  const { html, data } = await md.renderWithFrontMatter(pageSrc)
  const htmlSrc = njk.render(LAYOUT, {
    menuData,
    html,
    data
  })

  const miniHTMLSrc = minifyHTML(htmlSrc)
  fs.writeFileSync(pageBuildPath, miniHTMLSrc)
}

module.exports = renderPage
