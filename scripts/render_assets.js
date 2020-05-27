'use strict'

const fs = require('fs')
const fsExtra = require('fs-extra')
const signale = require('signale')
const browserify = require('browserify')
const _isString = require('lodash/isString')
const _isObject = require('lodash/isObject')
const _isEmpty = require('lodash/isEmpty')
const _keys = require('lodash/keys')
const { loadConfig } = require('../')

const config = loadConfig('config.json')
const { assets = {}, output = {} } = config
const { staticSite: staticSiteBuildPath } = output

if (_isEmpty(assets)) {
  signale.star('No assets to render')
  return
}

try {
  _keys(assets).forEach((dest) => {
    const asset = assets[dest]
    const assetPath = _isObject(asset) ? asset.path : asset
    const assetOptions = _isObject(asset) ? asset : {}

    if (!_isString(assetPath) || _isEmpty(assetPath)) {
      throw new Error(`No path found for ${dest}`)
    }

    const assetSrcPath = `${__dirname}/../${assetPath}`
    const assetDestPath = `${__dirname}/../${staticSiteBuildPath}/${dest}`

    if (_isEmpty(assetOptions)) {
      fsExtra.copySync(assetSrcPath, assetDestPath, { overwrite: true })
    } else {
      const { build, pathOnWindow, baseDir } = assetOptions

      if (build !== 'browserify') {
        throw new Error(`Unknown asset build type for ${dest}: ${build}`)
      }

      if (!_isString(pathOnWindow) || _isEmpty(pathOnWindow)) {
        throw new Error(
          `Asset ${dest} requires build but no window path configured`
        )
      }

      if (!_isString(baseDir) || _isEmpty(baseDir)) {
        throw new Error(
          `Asset ${dest} requires build but no baseDir configured`
        )
      }

      const destStream = fs.createWriteStream(assetDestPath)
      const b = browserify(assetSrcPath, {
        standalone: pathOnWindow,
        basedir: baseDir
      })

      b.bundle().pipe(destStream)
    }

    signale.success(`Rendered ${dest} -> ${assetDestPath}`)
  })
} catch (e) {
  signale.error('%s', e.message)
}
