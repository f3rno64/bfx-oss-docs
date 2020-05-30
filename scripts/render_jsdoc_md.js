'use strict'

const fs = require('fs')
const path = require('path')
const PI = require('p-iteration')
const signale = require('signale')
const _keys = require('lodash/keys')
const _last = require('lodash/last')
const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')
const jsdoc2md = require('jsdoc-to-markdown')

const { loadConfig } = require('../')

// Modified base template to wrap the member index in an api-docs-index
// container
const TEMPLATE = [
  '{{#orphans ~}}',
  '{{>header~}}',
  '{{>body}}',

  '::: api-docs-index',
  '{{setLevel this 0~}}',
  '{{#if (descendants min=(option \'memberIndex.minDescendants\'))~}}',
  '{{#if isExported~}}',
  '{{#if (equal (depth) 0)}}',

  '{{#if (optionEquals "member-index-format" "list")}}',
  '{{>member-index-list}}',
  '{{else~}}',
  '{{>member-index-grouped}}',
  '{{/if~}}',

  '{{/if~}}',
  '{{else~}}',
  '{{#if (optionEquals "member-index-format" "list")}}',

  '{{>member-index-list}}',

  '{{else}}',

  '{{>member-index-grouped}}',

  '{{/if~}}',
  '{{/if~}}',
  '{{/if}}',
  ':::',

  '{{>separator~}}',
  '{{>members~}}',
  '{{/orphans~}}'
].join('\n')

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { output, projects, structure } = config
  const { unifiedJSDocConfig } = output
  const { root: sourcesRoot } = structure
  const { root } = projects

  const jsdocConfigSrc = fs.readFileSync(`${__dirname}/../${unifiedJSDocConfig}`)
  const jsdocConfig = JSON.parse(jsdocConfigSrc)
  const { source } = jsdocConfig
  const { include } = source
  const projectIncludes = {}

  include.forEach((i) => {
    const project = i.replace(root, '').split('/')[1]

    if (_isEmpty(project)) {
      throw new Error(`Failed to get project name from include path: ${i}`)
    }

    if (!_isArray(projectIncludes[project])) {
      projectIncludes[project] = [i]
    } else {
      projectIncludes[project].push(i)
    }
  })

  await PI.forEachSeries(_keys(projectIncludes), async (project) => {
    const files = projectIncludes[project]
      .filter(i => !(/\.md$/.test(_last(i.split('/')))))
      .map(i => path.join(__dirname, '/../', i))
      .map(i => /\/(\w*)\.(\w*)$/.test(i) ? i : `${i}/**`)

    signale.info(`resolved includes for project ${project}:`)
    files.forEach(i => signale.info(`  - ${i}`))
    signale.info('gathering data...')

    const data = await jsdoc2md.getTemplateData({ files })
    const outputPath = path.join(...[
      __dirname, '../', `/${sourcesRoot}/api_docs/${project}.md`
    ])

    let output = await jsdoc2md.render({
      template: TEMPLATE,
      data
    })

    // Replace anchor name attribute with ID (<a>)
    output = output.replace(/<a\sname="/g, '<a id="')

    fs.writeFileSync(outputPath, output)

    signale.success(`Wrote ${project} docs to ${outputPath}`)
  })

  const duration = Date.now() - startMTS
  signale.success(`Rendered unified JSDoc to markdown in ${duration}ms`)
}

run().catch((e) => {
  signale.error('%s', e.stack)
})
