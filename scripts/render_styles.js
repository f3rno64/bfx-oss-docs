'use strict'

const fs = require('fs')
const sass = require('sass')
const _keys = require('lodash/keys')
const { loadConfig } = require('../')

const config = loadConfig('config.json')
const { styles = {}, output = {} } = config
const { sources = {}, config: stylesConfig = {} } = styles
const { staticSite: staticSiteBuildPath } = output
const buildBasePath = `${__dirname}/../${staticSiteBuildPath}`

_keys(sources).forEach((dest) => {
  const res = sass.renderSync({
    file: sources[dest],
    outFile: `${buildBasePath}/${dest}`,
    ...stylesConfig
  })

  fs.writeFileSync(`${buildBasePath}/${dest}`, res.css.toString())
  fs.writeFileSync(`${buildBasePath}/${dest}.map`, res.map.toString())
})
