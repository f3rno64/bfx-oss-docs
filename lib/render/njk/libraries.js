'use strict'

const fs = require('fs')
const path = require('path')
const PI = require('p-iteration')
const _values = require('lodash/values')
const _isUndefined = require('lodash/isUndefined')

const getMD = require('../../markdown_it')
const getNunjucks = require('../../nunjucks')
const minifyHTML = require('./minify_html')

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
  const { id, root } = definition
  const { output, structure, projects } = config
  const { root: srcRoot } = structure
  const { staticSite: buildPath } = output
  const { py, go, js, rb } = projects
  const libraries = [...py, ...go, ...rb, ...js]

  const md = getMD(config)
  const njk = getNunjucks(config)
  const srcPath = path.join(__dirname, '../../../', srcRoot, root)
  const renderedPages = {}

  await PI.forEach(libraries, async (library) => {
    const libraryPath = path.join(srcPath, library)

    if (!fs.existsSync(libraryPath)) {
      return
    }

    const loadFile = fn => fs.readFileSync(path.join(libraryPath, fn), 'utf-8')
    const configJSON = loadFile(CONFIG_FN)
    const config = JSON.parse(configJSON)
    const { language, index, files: filenames } = config
    const pages = filenames.map(fn => ({
      fn: `page_${id}_${library.replace(/-/g, '_')}_${fn.split('.')[0]}.html`,
      srcFN: fn
    }))

    await PI.forEach(pages, async (page) => {
      const src = loadFile(page.srcFN)
      const { html, data } = await md.renderWithFrontMatter(src)

      page.html = html
      page.data = data
      page.label = data.menuTitle || page.srcFN
    })

    pages.forEach((page) => {
      const { fn, srcFN } = page

      if (!_isUndefined(renderedPages[fn])) {
        throw new Error(`Resolved duplicate page filename: ${fn}`)
      }

      renderedPages[fn] = {
        index: index === srcFN,
        language,
        library,

        ...page
      }
    })
  })

  const pages = _values(renderedPages)

  return {
    pages: _values(renderedPages),
    finalize: async allPages => PI.forEach(pages, async (page) => {
      const { fn } = page
      const htmlFN = path.join(__dirname, '../../../', buildPath, fn)
      const finalHTML = njk.render(LAYOUT, {
        pages: allPages,
        page
      })

      fs.writeFileSync(htmlFN, minifyHTML(finalHTML))
    })
  }
}

module.exports = renderLibraries
