'use strict'

module.exports = ({ output, includes, tutorialsPath }) => ({
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
    'jsdoc-plugin-url',
    'jsdoc-mermaid'
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
    tutorials: './tutorials'
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
