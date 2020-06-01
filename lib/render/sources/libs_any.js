'use strict'

const fs = require('fs')
const path = require('path')
const PI = require('p-iteration')
const signale = require('signale')
const _isFunction = require('lodash/isFunction')

const SEARCH_DIRECTORIES = ['docs', 'doc', 'tutorials']
const PROJECT_README_FN = 'README.md'
const PROJECT_CONFIG_FN = 'config.json'

/**
 * A function that formats a markdown source file for inclusion in the
 * configured `_src` folder.
 *
 * @callback module:bfx-oss-docs.MDFormatter
 * @param {string} mdSrc - source markdown file as a string
 * @returns {string} mdFmt - formatted markdown `_src` file
 */

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {string} language - 'js', 'py', 'go', or 'rb'
 * @param {module:bfx-oss-docs.Config} config - config
 * @param {module:bfx-oss-docs.MDFormatter} [mdFormatter] - a function which if
 *   provided is passed each markdown source file as a `string` prior to saving
 *   in the configured `_src` directory
 * @returns {Promise} p
 */
const buildLibsAny = async (language, config, mdFormatter) => {
  const { projects: projectConfig, structure } = config
  const { root: srcRootDir } = structure
  const { root, [language]: projects = [] } = projectConfig
  const srcRoot = path.join(__dirname, '../../../', srcRootDir, 'api_docs')
  const fmtMD = _isFunction(mdFormatter) ? mdFormatter : md => md

  return PI.forEach(projects, async (project) => {
    const projectConfig = {
      index: PROJECT_README_FN,
      files: [],
      language
    }

    const outputPath = path.join(srcRoot, project)
    const projectRoot = path.join(__dirname, '../../../', root, project)
    const readmePath = path.join(projectRoot, 'README.md')
    const writeProjectFile = (data, fn) => {
      fs.writeFileSync(path.join(outputPath, fn), data)
      signale.success(`Wrote ${project}/${fn}`)

      if (fn !== PROJECT_CONFIG_FN) {
        projectConfig.files.push(fn)
      }
    }

    if (fs.existsSync(outputPath)) {
      signale.warn(`Sources exist for ${project}, skipping build`)
      return
    }

    fs.mkdirSync(outputPath)

    // Grab readme as index if possible
    if (fs.existsSync(readmePath)) {
      const readmeMD = fs.readFileSync(readmePath, 'utf-8')
      const readme = [
        '---',
        'title: "README"',
        'menuTitle: "README"',
        '---',
        fmtMD(readmeMD)
      ].join('\n')

      writeProjectFile(readme, PROJECT_README_FN)
    }

    // Search for docs
    SEARCH_DIRECTORIES.forEach((dir) => {
      const searchPath = path.join(projectRoot, dir)

      if (!fs.existsSync(searchPath)) {
        return
      }

      fs.readdirSync(searchPath)
        .filter(f => /\.md$/.test(f.toLowerCase()))
        .forEach((f) => {
          const name = f.split('.')[0]
          const fn = `${name.toLowerCase()}.md`
          const fSrcPath = path.join(searchPath, f)
          const fRaw = fs.readFileSync(fSrcPath, 'utf-8')
          const fContents = [
            '---',
            `title: "${name}"`,
            `menuTitle: "${name}"`,
            '---',
            fmtMD(fRaw)
          ].join('\n')

          writeProjectFile(fContents, fn)
        })
    })

    writeProjectFile(JSON.stringify(projectConfig), PROJECT_CONFIG_FN)
  })
}

module.exports = buildLibsAny
