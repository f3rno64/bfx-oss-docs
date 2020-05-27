'use strict'

const fs = require('fs')
const sass = require('sass')
const signale = require('signale')
const _keys = require('lodash/keys')
const _last = require('lodash/last')
const { loadConfig } = require('../')

try {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { styles = {}, output = {} } = config
  const { sources = {}, config: stylesConfig = {} } = styles
  const { staticSite: staticSiteBuildPath } = output
  const buildBasePath = `${__dirname}/../${staticSiteBuildPath}`
  const sourceDestinations = _keys(sources)

  signale.info(`Rendering styles to ${staticSiteBuildPath}`)

  sourceDestinations.forEach((dest) => {
    const stylesheetName = _last(dest.split('/'))
    const res = sass.renderSync({
      file: sources[dest],
      outFile: `${buildBasePath}/${dest}`,
      ...stylesConfig
    })

    const buildPath = `${buildBasePath}/${dest}`

    fs.writeFileSync(buildPath, res.css.toString())
    fs.writeFileSync(`${buildPath}.map`, res.map.toString())

    signale.info(`Rendered ${stylesheetName}`)
  })

  const duration = Date.now() - startMTS

  signale.success(
    `Rendered ${sourceDestinations.length} styles in ${duration}ms`
  )
} catch (e) {
  signale.error('%s', e.stack)
}
