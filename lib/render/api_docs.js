'use strict'

const fs = require('fs')
const getNunjucks = require('../nunjucks')
const minifyHTML = require('./minify_html')
const genMenuData = require('./gen_menu_data')
const renderJSDocAPIDocs = require('./api_docs/jsdoc')

// TODO: Move to config
const LAYOUT = 'layouts/api_docs/index.njk'

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {object} definition - definition
 * @param {module:bfx-oss-docs.Config} config - site configuration
 */
const renderAPIDocs = async (definition, config) => {
  const { id, language } = definition
  const { output } = config
  const { staticSite: buildPath } = output

  if (language !== 'js') {
    throw new Error(
      `Unsupported API doc language in section: ${language}`
    )
  }

  const njk = getNunjucks(config)
  const menuData = genMenuData(config)
  const modulesData = await renderJSDocAPIDocs(definition, config)

  const htmlSrc = njk.render(LAYOUT, {
    modules: modulesData,
    menuData
  })

  const pageFN = `page_${id}.html`
  const pageBuildPath = `${__dirname}/../../${buildPath}/${pageFN}`
  const miniHTMLSrc = minifyHTML(htmlSrc)
  fs.writeFileSync(pageBuildPath, miniHTMLSrc)
}

module.exports = renderAPIDocs
