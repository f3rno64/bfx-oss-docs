'use strict'

/**
 * Stylus source map options
 *
 * @memberof module:stylus
 * @typedef {object} SourceMapOptions
 *
 * @property {string} [basePath='.'] - base path from which sourcemap and all
 *   sources are relative
 * @property {string} [inline=false] - inlines a sourcemap with full source
 *   text in base64 format
 * @property {string} [comment=true] - adds a comment with the `sourceMappingURL` to
 *   the generated CSS
 * @property {string} [sourceRoot=null] - `sourceRoot` prop of the generated
 *   sourcemap
 */
