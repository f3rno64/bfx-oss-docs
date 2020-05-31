'use strict'

const fs = require('fs')
const path = require('path')
const PI = require('p-iteration')
const _values = require('lodash/values')
const _isUndefined = require('lodash/isUndefined')

const getMD = require('../markdown_it')
const getNunjucks = require('../nunjucks')
const minifyHTML = require('./minify_html')
const genMenuData = require('./gen_menu_data')

// TODO: Move to config
const LAYOUT = 'layouts/library_file.njk'
const CONFIG_FN = 'config.json'

/**
 * @todo create typedef for definition
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {object} definition - page definition
 * @param {module:bfx-oss-docs.Config} config - site configuration
 */
const renderLibraries = async (definition, config) => {
  const { id, root, libraries } = definition
  const { output, structure } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output

  const md = getMD(config)
  const njk = getNunjucks(config)
  const srcPath = path.join(__dirname, '../../', srcRoot, root)
  const renderedPages = {}

  await PI.forEach(libraries, async (library) => {
    const libraryPath = path.join(srcPath, library)
    const loadFile = fn => fs.readFileSync(path.join(libraryPath, fn), 'utf-8')
    const configJSON = loadFile(CONFIG_FN)
    const config = JSON.parse(configJSON)
    const { language, index, files: filenames } = config
    const pages = filenames.map(fn => ({
      fn: `page_${id}_${library.replace(/-/g, '_')}_${fn}.html`,
      srcFN: fn
    }))

    await PI.forEach(pages, async (page, i) => {
      const src = loadFile(page.srcFN)
      const { html, data } = await md.renderWithFrontMatter(src)

      page.html = html
      page.data = data
    })

    pages.forEach((page) => {
      const { fn } = page

      if (!_isUndefined(renderedPages[fn])) {
        throw new Error(`Resolved duplicate page filename: ${fn}`)
      }

      renderedPages[fn] = {
        index: index === fn,
        language,
        library,
        pages,
        page,
        fn
      }
    })
  })

  const pages = _values(renderedPages)
  const menuData = genMenuData(config)

  pages.forEach((page) => {
    const { fn } = page
    const htmlFN = path.join(__dirname, '../../', buildPath, fn)
    const finalHTML = njk.render(LAYOUT, {
      menuData,
      pages,
      page
    })

    fs.writeFileSync(htmlFN, minifyHTML(finalHTML))
  })
}

module.exports = renderLibraries
