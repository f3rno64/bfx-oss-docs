'use strict'

const fs = require('fs')
const PI = require('p-iteration')
const getMD = require('../../markdown_it')
const getNunjucks = require('../../nunjucks')
const minifyHTML = require('./minify_html')

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
  const { label, id, root, filename, path } = definition
  const { output, structure } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output

  const md = getMD(config)
  const njk = getNunjucks(config)
  const pageSrcPath = `${__dirname}/../../../${srcRoot}/${root}/${path || 'index.md'}`
  const pageBuildPath = `${__dirname}/../../../${buildPath}`
  const pageSrc = fs.readFileSync(pageSrcPath, 'utf-8')
  const { html, data } = await md.renderWithFrontMatter(pageSrc)

  const pages = [{
    index: true,
    fn: filename || `page_${id}.html`,
    label: label || data.menuTitle,
    html,
    data
  }]

  return {
    pages,
    finalize: async allPages => PI.forEach(pages, async (page) => {
      const finalHTML = njk.render(LAYOUT, {
        pages: allPages,
        page
      })

      fs.writeFileSync(`${pageBuildPath}/${page.fn}`, minifyHTML(finalHTML))
    })
  }
}

module.exports = renderPage
