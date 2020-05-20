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

  templates: {
    cleverLinks: false,
    monospaceLinks: true,
    smallSourceLink: true,
    hideAuthor: true
  },

  opts: {
    destination: output,
    encoding: 'utf8',
    private: false,
    recurse: true,
    template: './node_modules/docdash'
  },

  docdash: {
    static: true,
    sort: true,
    search: true,
    wrap: true,
    collapse: true,
    typedefs: true,
    sectionOrder: [
      'Tutorials',
      'Namespaces',
      'Modules',
      'Events',
      'Classes',
      'Externals',
      'Interfaces',
      'Mixins'
    ],

    scripts: [
      '/fonts.css',
      '/style.css',
      '/script.js',
      '/hemisu-dark.min.css'
    ]
  }
})
