'use strict'

/**
 * Generates a JSDoc configuration object which can be written to the
 * configured `unifiedJSDoc` config path, in order to generate the unified
 * config for all Bitfinex JS OSS projects.
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {object} args - args
 * @param {string} args.output - build destination
 * @param {string[]} args.includes - array of paths to parse for documentation
 * @returns {module:bfx-oss-docs.UnifiedJSDocConfig} config
 */
const getUnifiedConfig = ({ output, includes }) => ({
  tags: {
    allowUnknownTags: false,
    dictionaries: ['jsdoc']
  },

  source: {
    include: includes,
    includePattern: '.js$'
  },

  plugins: [
    'plugins/markdown',
    'jsdoc-plugin-npm',
    'jsdoc-plugin-url'
  ],

  markdown: {
    parser: 'gfm',
    hardwrap: false,
    idInHeadings: true
  },

  opts: {
    destination: output,
    encoding: 'utf8',
    private: false,
    recurse: true,
    verbose: true,
    template: './node_modules/docdash',
    tutorials: './jsdoc_tutorials'
  },

  templates: {
    cleverLinks: true,
    default: {
      outputSourceFiles: true,
      includeDate: true,
      useLongnameInNav: false
    }
  },

  docdash: {
    static: true,
    sort: true,
    search: true,
    collapse: true,
    wrap: true,
    typedefs: true,
    private: false,
    scripts: [
      '/fonts.css',
      '/hemisu-dark.min.css',
      '/script.js',
      '/style.css'
    ],

    sectionOrder: [
      'Tutorials',
      'Namespaces',
      'Modules',
      'Classes',
      'Externals',
      'Mixins',
      'Interfaces'
    ]
  }
})

module.exports = getUnifiedConfig
