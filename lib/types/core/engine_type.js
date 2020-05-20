'use strict'

/**
 * Enum of valid layout renderers. The recommended default is
 * {@link module:vendor.Nunjucks}. To set the engine, pass a valid
 * **EngineType** value to the `engine` field of `config.layout.engine`.
 *
 * @see {@link module:docs.Config}
 *
 * @memberof module:docs
 * @enum {string}
 */
const EngineType = {
  /**
   * Enables the {@link module:vendor.Nunjucks} layout renderer.
   *
   * @constant
   * @type {string}
   */
  'nunjucks': 'nunjucks'
}

module.exports = EngineType
