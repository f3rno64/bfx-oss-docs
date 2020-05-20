'use strict'

require('../styles/config')
require('../layouts/config')
require('../asssets/config')
require('../markdown/config')
require('../../js/default_config')

/**
 * Complete configuration spec for the site generator. The values here can be
 * provided on the manifest under a `'docs'` key, or in any of the following
 * files: `.docs.json`, `.docsrc` in the project root.
 *
 * The default config is {@link module:core.DefaultConfig}.
 *
 * @memberof module:core
 * @typedef {object} Config
 * @example
 *
 *  // _site.json
 *  {
 *    output: "./dist",
 *    input: "./src",
 *    routing: {
 *      "/": "index",
 *      "/folder/:page": "some_folder/$page"
 *    }
 *  }
 *
 * @property {string} output - path to folder for built files
 * @property {string} input - path to folder for built files
 * @property {object} [routing={ '/': 'index' }] - map of route URLs to
 *   page filenames within the `pages` directory configured with the `input`
 *   param. Route variables may be extracted into a variable prefixed by a ':'
 *   colon on the URL, and available prefixed with a '$' when selecting the
 *   destination layout. The target suffix is optional, added based on the
 *   selected layout engine.
 *
 * @property {module:layouts.Config} [layouts] - config for the templating
 *   system
 * @property {module:assets.Config} [assets] - asset file handling
 *   configuration
 * @property {module:styles.Config} [styles] - config for `stylus`, used to
 *   compile all `.styl` to `.css` files
 * @property {module:markdown.Config} [markdown] - config for markdown parsing
 */
