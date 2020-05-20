'use strict'

/**
 * Stylus options shared by Renderer, Parser, Normalizer, Compiler, an
 * Evaluator.
 *
 * @memberof module:stylus
 * @typedef {object} RenderOptions
 *
 * @property {object} [globals] - map of global variables key'ed by name
 * @property {object} [functions] - map of global functions key'ed by name
 * @property {string[]} [use] - array of plugin paths
 * @property {string[]} [imports] - array of paths to `stylus` files for import
 * @property {string[]} [paths] - array of paths to use for lookups
 * @property {string} [filename='stylus'] - name used for error reporting
 * @property {Function} [Evaluator] - optional custom evaluator
 * @property {object} [globals] - map of global variables key'ed by name
 */
