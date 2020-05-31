'use strict'

const fs = require('fs')
const path = require('path')
const PI = require('p-iteration')
const signale = require('signale')
const _keys = require('lodash/keys')
const _last = require('lodash/last')
const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _includes = require('lodash/includes')
const jsdoc2md = require('jsdoc-to-markdown')

const { loadConfig } = require('../')

// Modified base template to wrap the member index in an api-docs-index
// container
//
// TODO: Extract
const TEMPLATE = [
  '::: api-docs-index',
  '{{#orphans ~}}',
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
  '{{/orphans~}}',
  ':::',

  '{{#orphans ~}}',
  '{{>header~}}',
  '{{>body}}',
  '{{>separator~}}',
  '{{>members~}}',
  '{{/orphans~}}'
].join('\n')

const PROJECT_CONFIG_FN = 'config.json'
const PROJECT_API_REF_FN = 'reference.md'
const PROJECT_README_FN = 'README.md'

const run = async () => {
  const startMTS = Date.now()
  const config = loadConfig('config.json')
  const { output, projects, structure } = config
  const { unifiedJSDocConfig } = output
  const { root: srcRootDir } = structure
  const { root } = projects

  const srcRoot = path.join(__dirname, '../', `/${srcRootDir}/api_docs`)
  const jsdocConfigSrc = fs.readFileSync(`${__dirname}/../${unifiedJSDocConfig}`)
  const jsdocConfig = JSON.parse(jsdocConfigSrc)
  const { source } = jsdocConfig
  const { include } = source
  const projectIncludes = {}
  const allIncludes = []

  signale.info(`Using source root ${srcRoot}`)

  include.forEach((i) => {
    const project = i.replace(root, '').split('/')[1]

    if (_isEmpty(project)) {
      throw new Error(`Failed to get project name from include path: ${i}`)
    }

    if (_includes(allIncludes, i)) {
      throw new Error(`Found duplicate (global scope) include path: ${i}`)
    } else {
      allIncludes.push(i)
    }

    if (!_isArray(projectIncludes[project])) {
      projectIncludes[project] = [i]
    } else {
      projectIncludes[project].push(i)
    }
  })

  // const globalData = await jsdoc2md.getTemplateData({ files: allIncludes })
  // const modules = globalData.filter(({ kind }) => kind === 'module')

  await PI.forEachSeries(_keys(projectIncludes), async (project) => {
    const projectConfig = {
      index: PROJECT_README_FN,
      language: 'js',
      files: []
    }

    const outputPath = path.join(srcRoot, project)
    const projectRoot = path.join(__dirname, '../', root, project)
    const jsDocConfigPath = path.join(projectRoot, '.jsdoc.json')
    const readmePath = path.join(projectRoot, 'README.md')
    const files = projectIncludes[project]
      .filter(i => !(/\.md$/.test(_last(i.split('/')))))
      .map(i => path.join(__dirname, '/../', i))
      .map(i => /\/(\w*)\.(\w*)$/.test(i) ? i : `${i}/**`)

    const writeProjectFile = (data, fn) => {
      fs.writeFileSync(path.join(outputPath, fn), data)
      signale.success(`Wrote ${project}/${fn}`)

      if (fn !== PROJECT_CONFIG_FN) {
        projectConfig.files.push(fn)
      }
    }

    // No accidental source overwrite, error raised here if the path exists
    fs.mkdirSync(outputPath)

    // Grab readme as index if possible
    if (fs.existsSync(readmePath)) {
      const readmeMD = fs.readFileSync(readmePath, 'utf-8')
      const readme = [
        '---',
        'title: "README"',
        'menuTitle: "README"',
        '---',
        readmeMD
      ].join('\n')

      writeProjectFile(readme, PROJECT_README_FN)
    }

    // Write API Reference (fallback index if no readme)
    const data = await jsdoc2md.getTemplateData({ files })
    let apiRefMD = await jsdoc2md.render({ template: TEMPLATE, data })

    // TODO: Process cross-library module links
    // Replace anchor name attribute with ID (<a>)
    apiRefMD = apiRefMD.replace(/<a\sname="/g, '<a id="')

    const apiRef = [
      '---',
      'title: "API Reference"',
      'menuTitle: "API Reference"',
      '---',
      apiRefMD
    ].join('\n')

    writeProjectFile(apiRef, PROJECT_API_REF_FN)

    // Grab tutorials
    if (fs.existsSync(jsDocConfigPath)) {
      const jsDocConfigSrc = fs.readFileSync(jsDocConfigPath, 'utf-8')
      const jsDocConfig = JSON.parse(jsDocConfigSrc)
      const { opts = {} } = jsDocConfig
      const { tutorials } = opts

      if (_isString(tutorials) && !_isEmpty(tutorials)) {
        const tutorialsPath = path.join(
          path.dirname(jsDocConfigPath), tutorials
        )

        fs.readdirSync(tutorialsPath)
          .filter(f => /\.md$/.test(f.toLowerCase()))
          .forEach((f) => {
            const tutorialName = f.split('.')[0]
            const tutorialFN = `tutorial_${tutorialName.toLowerCase()}.md`
            const tutorialSrcPath = path.join(tutorialsPath, f)
            const tutorialRaw = fs.readFileSync(tutorialSrcPath)
            const tutorial = [
              '---',
              `title: "${tutorialName}"`,
              `menuTitle: "${tutorialName}"`,
              `project: "${project}"`,
              'tutorial: true',
              '---',
              tutorialRaw
            ].join('\n')

            writeProjectFile(tutorial, tutorialFN)
          })
      }
    }

    writeProjectFile(JSON.stringify(projectConfig), PROJECT_CONFIG_FN)
  })

  const duration = Date.now() - startMTS
  signale.success(`Rendered unified JSDoc to markdown in ${duration}ms`)
}

run().catch((e) => {
  signale.error('%s', e.stack)
})
