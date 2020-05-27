'use strict'

const JSYAML = require('js-yaml')
const signale = require('signale')
const Bluebird = require('bluebird')
const _isUndefined = require('lodash/isUndefined')
const MarkdownItFrontMatter = require('markdown-it-front-matter')

/**
 * Adds two new render methods to provide access to the parsed front matter
 * data alongside the rendered output:
 *
 * * `md.renderWithFrontMatter`
 * * `md.renderInlineWithFrontMatter`
 *
 * NOTE: Can only be registered once per MarkdownIt instance
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
const registerFrontMatterExtension = (md) => {
  // Assumes only one render may occur at once (refactor if found not valid)
  let frontMatterData = null
  let frontMatterError = null

  // This cb is called prior to render completion
  md.use(MarkdownItFrontMatter, (yamlSrc) => {
    try {
      frontMatterData = JSYAML.safeLoad(yamlSrc)
      frontMatterError = null
    } catch (e) {
      signale.error(`Failed to parse YAML front matter: ${yamlSrc}`)
      frontMatterData = null
      frontMatterError = e
    }
  })

  const registerRenderer = (name) => {
    const funcName = `${name}WithFrontMatter`

    if (!_isUndefined(md[funcName])) {
      throw new Error(
        `Custom front matter render method already exists: ${name}`
      )
    }

    md[funcName] = (src, env) => (
      new Bluebird((resolve, reject) => {
        const html = md[name](src, env)

        if (frontMatterError !== null) {
          reject(frontMatterError)
          return
        }

        resolve({ data: frontMatterData, html })

        frontMatterData = null
        frontMatterError = null
      })
    )
  }

  registerRenderer('render')
  registerRenderer('renderInline')
}

module.exports = registerFrontMatterExtension
