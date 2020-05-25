'use strict'

const fs = require('fs')
const sass = require('sass')
const _keys = require('lodash/keys')
const _isEmpty = require('lodash/isEmpty')
const _isObject = require('lodash/isObject')
const fsExtra = require('fs-extra')
const nunjucks = require('nunjucks')
const nunjucksMarkdown = require('nunjucks-markdown')
const nunjucksCodeHighlight = require('nunjucks-extension-code-highlight')
const MarkdownIt = require('markdown-it')

const config = require('../config.json')

if (!_isObject(config)) {
  throw new Error('config not an object')
} else if (_isEmpty(config)) {
  throw new Error('config empty')
}

const { markdown: markdownConfig = {} } = config
const markdownParserID = markdownConfig.parser

if (markdownParserID !== 'markdown-it') {
  throw new Error('DEV: markdown parser must be markdown-it')
}

const mdRenderer = MarkdownIt(markdownConfig.options || {})

_keys(markdownConfig.plugins).forEach((pkg) => {
  mdRenderer.use(require(pkg), markdownConfig.plugins[pkg])
})

const { layouts: layoutConfig = {} } = config

if (layoutConfig.engine !== 'nunjucks') {
  throw new Error('DEV: layout engine must be nunjucks')
}

const nunjucksEnv = nunjucks.configure(
  `${__dirname}/../${layoutConfig.includePath}`, layoutConfig.options
)

nunjucksCodeHighlight(nunjucksEnv)
nunjucksMarkdown.register(nunjucksEnv, mdRenderer.render.bind(mdRenderer))
nunjucksEnv.addGlobal('includeFile', src => (
  fs.readFileSync(
    `${__dirname}/../${layoutConfig.includePath}/${src.split('\n')[0]}`, 'utf-8'
  )
))

const pageFileNames = fs.readdirSync(`${__dirname}/../${layoutConfig.pagesPath}`)

pageFileNames.forEach(pageFileName => {
  const pageName = pageFileName.split('.')[0]
  const srcPath = `${__dirname}/../${layoutConfig.pagesPath}/${pageFileName}`
  const dstPath = `${__dirname}/../${config.output.staticSite}/${pageName}.html`

  console.log('rendering %s -> %s', srcPath, dstPath)

  const templateSource = fs.readFileSync(srcPath, 'utf-8')

  nunjucksEnv.renderString(templateSource, {}, {
    path: srcPath
  }, (err, html) => {
    if (err) {
      throw err
    }

    fs.writeFileSync(dstPath, html)
  })
})

_keys(config.styles.sources).forEach((dest) => {
  const res = sass.renderSync({
    file: config.styles.sources[dest],
    outFile: `${__dirname}/../${config.output.staticSite}/${dest}`,
    ...(config.styles.config || {})
  })

  fs.writeFileSync(`${__dirname}/../${config.output.staticSite}/${dest}`, res.css.toString())
  fs.writeFileSync(`${__dirname}/../${config.output.staticSite}/${dest}.map`, res.map.toString())
})

_keys(config.assets).forEach((dest) => {
  const assetSrc = `${__dirname}/../${config.assets[dest]}`
  const assetDest = `${__dirname}/../${config.output.staticSite}/${dest}`

  console.log(`copy ${assetSrc} -> ${assetDest}`)

  fsExtra.copySync(assetSrc, assetDest, { overwrite: true })
})
