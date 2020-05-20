'use strict'

/**
 * Enum of valid markup renderers. The recommended default is
 * {@link module:vendor.MarkdownIt}. To set the renderer, pass a valid
 * {@link module:layouts.RendererType} value to the `renderer` field of
 * `config.renderer.config`.
 *
 * @memberof module:docs
 * @enum {string}
 */
const RendererType = {
  /**
   * Enables the {@link module:vendor.MarkdownIt} renderer. See
   * {@link module:layouts.MarkdownIt} for more information, and
   * {@link tutorial:markdown-it-plugins} for a list of available plugins.
   *
   * @constant
   * @type {string}
   */
  'markdown_it': 'markdown_it'
}

module.exports = RendererType
