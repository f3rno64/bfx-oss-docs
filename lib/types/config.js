'use strict'

/**
 * Bitfinex documentation generator configuration object.
 *
 * @todo Flesh this type out
 *
 * @typedef {object} module:bfx-oss-docs.Config
 * @property {object} output - build artifact configuration
 * @property {object} layouts - layout engine configuration
 * @property {object} markdown - markdown parser/renderer configuration
 * @property {object} styles - style parser/engine configuration
 * @property {object} assets - static asset configuration
 * @property {object} projects - map of all bitfinex open source projects,
 *   keyed by language.
 * @property {string} projects.path - path to folder containing all bitfinex
 *   projects referenced in the `projects` object, relative to the project
 *   root.
 * @property {string[]} [projects.js] - array of JavaScript project names
 * @property {object} unifiedJSDoc - unified JSDoc generation configuration
 * @property {object} readmeIOData - readme.io data source configuration (NOTE:
 *   this is temporary until readme.io usage is deprecated
 */
