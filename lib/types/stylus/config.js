'use strict'

require('./renderer_options')
require('./sourcemap_options')
require('./sourcemapper_options')
require('./normalizer_options')
require('./middleware_options')

/**
 * All config options for `stylus`; can be passed to `stylus.render()` or via
 * the CLI as flags (save for some exceptions). The `options` object is passed
 * to various classes within `stylus` during opration, hence being composed of
 * multiple sub-types.
 *
 * @memberof module:stylus
 *
 * @typedef {object} Config
 * @extends module:stylus.RenderOptions
 * @extends module:stylus.SourceMapOptions
 * @extends module:stylus.SourceMapperOptions
 * @extends module:stylus.NormalizerOptions
 * @extends module:stylus.MiddlewareOptions
 */
