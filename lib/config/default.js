'use strict'

require('../types/core/config')
require('../types/layouts/config')
require('../types/stylus/config')
require('../types/markdown/config')

/**
 * Configuration options overriden by what is supplied by the user.
 * Use `nunjucks` for layouts and `markdown-it` for parsing markdown.
 *
 * @constant
 * @type {module:core.Config}
 * @memberof module:exec
 */
const DefaultConfig = {
  /** @type {module:layouts.Config} */
  "layouts": {
    "engine": "nunjucks",
    "includes": [
      "./lib/layouts"
    ]
  },

  /** @type {module:assets.Config} */
  "assets": {
    "includes": [
      "./lib/assets"
    ]
  },

  /** @type {module:stylus.Config} */
  "styles": {
    "engine": "stylus",
    "plugins": [],

    "globals": {},
    "functions": {},
    "imports": [],

    "paths": [
      "./lib/styles"
    ]
  },

  /** @type {module:markdown.Config} */
  "markdown": {
    "parser": "markdown-it"
  }
}

module.exports = DefaultConfig
