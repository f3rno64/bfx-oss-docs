'use strict'

require('../vendor/markdown_it')
require('../core/parser_types')

/**
 * Complete **markdown** parser configuration, including settings and plugins.
 * Currently only {@link module:vendor.MarkdownIt} is supported.
 *
 * @memberof module:markdown
 * @typedef {object} Config
 *
 * @property {module:core.RendererType} [parser='markdown_it'] - ID of parser
 *   to use for processing all **markdown** formatted content.
 * @property {string[]} [plugins=[]] - array of plugin modules to be initialized
 *   and included on the rendering environment.
 */
