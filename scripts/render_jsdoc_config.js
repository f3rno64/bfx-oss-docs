'use strict'

const fs = require('fs')
const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _keys = require('lodash/keys')
const genJSDocConfig = require('../lib/gen_jsdoc_conf')
const siteConfig = require('../config.json')

const {
  packages = {},
  'package-root': root
} = siteConfig

const includes = []

const ENTRY_FALLBACKS = [
  'index.js',
  'lib/index.js',
  'src/index.js'
]

const fileExists = p => {
  try {
    fs.statSync(`${__dirname}/../${root}/${p}`)
    return true
  } catch (e) {
    return false
  }
}

_keys(packages).forEach((module) => {
  const jsdocConfigPath = `${__dirname}/../${root}/${module}/.jsdoc.json`
  const manifestPath = `${__dirname}/../${root}/${module}/package.json`
  let manifest

  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
  } catch (e) {
    console.log(`Failed to load manifest ${manifestPath}: ${e.message}`)
    return
  }

  let { main = 'index.js' } = manifest

  if (/dist/.test(main)) {
    for (let i = 0; i < ENTRY_FALLBACKS.length; i += 1) {
      if (fileExists(`${module}/${ENTRY_FALLBACKS[i]}`)) {
        main = ENTRY_FALLBACKS[i]
        break
      }
    }
  }

  if (!_isString(main) || _isEmpty(main)) {
    throw new Error(`Module ${module} manifest invalid 'main' value: ${main}`)
  } else if (!fileExists(`${module}/${main}`)) {
    console.log(`No entry point found for module ${module}, skipping (${main})`)
    return
  }

  try {
    const jsdoc = JSON.parse(fs.readFileSync(jsdocConfigPath, 'utf-8'))
    const jsdocIncludes = (jsdoc.source || {}).include || []

    if (_isArray(jsdocIncludes)) {
      includes.push(...(jsdocIncludes.map(p => (
        `./modules/${module}/${p}`
      ))))
    }
  } catch (e) {
    includes.push(`./modules/${module}/${main}`)
  }
})

const finalIncludes = includes.map(p => (
  /dist/.test(p) ? p.split('dist').join('lib') : p
))

console.log('Parsed JSDoc sources')
finalIncludes.forEach(p => console.log(`  - ${p}`))

const combinedConfig = genJSDocConfig({
  tutorialsPath: null,
  output: siteConfig.output.jsdoc_dist,
  includes: finalIncludes
})

const outJSDocPath = `${__dirname}/../${siteConfig.output.jsdoc_conf}`

fs.writeFileSync(outJSDocPath, JSON.stringify(combinedConfig, null, 2))
