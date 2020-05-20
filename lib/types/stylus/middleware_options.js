'use strict'

/**
 * Stylus middleware options object.
 *
 * @memberof module:stylus
 * @typedef {object} MiddlewareOptions
 *
 * @property {boolean} [serve=true] - if true, stylus files are served from
 *   `dest`
 * @property {boolean} [force] - always re-compile
 * @property {string} [src] - source directory used to find `.styl` files
 * @property {string} [dest] - destination directory used to output `.css`
 *   files when undefined defaults to `src`
 * @property {Function} [compile] - custom compile function, needs to have a
 *   signature of (src, path)
 * @property {boolean} [firebug] - emits debug infos in the generated CSS that
 *   can be used by the `FireStylus` Firebug plugin
 * @property {boolean} [linenos] - emits comments in the generated CSS
 *   indicating the corresponding stylus line
 * @property {boolean} [sourcemap] - generates a sourcemap in sourcemaps v3
 *   format
 */
