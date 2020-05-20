'use strict'

/**
 * Nunjucks environment configuration
 *
 * @memberof module:nunjucks
 * @typedef {object} EnvironmentConfiguration
 * @property {boolean} [autoescape=true] - enables global auto-escaping; if true,
 *   every string variable will be escaped by default. If false, strings can be
 *   manually escaped with the `escape` filter (see
 *   {@link module:layouts.filters.escape}).
 * @property {boolean} [throwOnUndefined=false] - throw errors when outputting
 *   a null/undefined value.
 * @property {boolean} [trimBlocks=false] - automatically remove trailing
 *   newlines from a block/tag.
 * @property {boolean} [lstripBlocks=false] - automatically remove leading
 *   whitespace from a block/tag.
 */
