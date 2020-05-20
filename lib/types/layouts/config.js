'use strict'

require('../core/engine_type')
require('../core/renderer_type')

/**
 * Configuration for the layout system
 *
 * @memberof module:layouts
 * @typedef {object} Config
 *
 * @property {module:core.EngineType} [engine='nunjucks'] - layout rendering
 *   engine to use (@see {@link module:core.EngineType} for all options)
 * @property {module:core.RendererType} [renderer='markdown_it'] - ID of
 *   renderer to use for processing all markup into HTML.
 *   {@link module:vendor.MarkdownIt} is the default, identified by
 *   `markdown_it`.
 * @property {string[]} [includes] - array of paths to folders, or files to
 *   include when looking up layouts.
 */
