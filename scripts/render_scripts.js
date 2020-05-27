'use strict'

const fs = require('fs')
const signale = require('signale')
const babel = require('@babel/core')
const _isEmpty = require('lodash/isEmpty')
const { loadConfig } = require('../')

try {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { scripts = {}, output = {} } = config
  const { staticSite: staticSiteBuildPath } = output
  const { babelConfig = {} } = scripts
  const outputPath = `${staticSiteBuildPath}/js`

  if (_isEmpty(babelConfig)) {
    signale.error([
      'No babel config object preset, cannot render; consider using the asset',
      'system instead'
    ].join(' '))

    return
  }

  signale.info(`Rendering scripts to ${outputPath}`)

  const scriptBasePath = `${__dirname}/../_scripts`
  const scriptFileNames = fs.readdirSync(scriptBasePath)

  if (_isEmpty(scriptFileNames)) {
    signale.star('No scripts to render')
    return
  }

  scriptFileNames.forEach((scriptFN) => {
    const scriptName = scriptFN.split('.')[0]
    const builtJSPath = `${outputPath}/${scriptName}.js`
    const scriptSrc = fs.readFileSync(`${scriptBasePath}/${scriptFN}`, 'utf-8')
    const builtScript = babel.transformSync(scriptSrc, babelConfig)
    const { code } = builtScript

    fs.writeFileSync(builtJSPath, code)

    signale.info(`Rendered ${scriptName}`)
  })

  const duration = Date.now() - startMTS

  signale.success(
    `Rendered ${scriptFileNames.length} scripts in ${duration}ms`
  )
} catch (e) {
  signale.error('%s', e.stack)
}
