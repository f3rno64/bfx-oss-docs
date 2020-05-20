'use strict'

require('../index')

/**
 * Builtin filter from {@link module:nunjucks_builtins}. Convert the characters
 * &, <, >, ‘, and ” in strings to HTML-safe sequences.
 *
 * Use this if you need to display text that might contain such characters in
 * HTML. Marks return value as markup string
 *
 * @namespace TemplateFilters
 * @callback escape
 * @alias e
 *
 * @param {string} str - piped in
 * @returns {string} out
 */
