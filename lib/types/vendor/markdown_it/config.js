'use strict'

require('../../layouts/config')

/**
 * Complete configuration options for {@link module:vendor.MarkdownIt} (the
 * default layout parser for `.md` extensions.) For more information see
 * {@link module:layouts.Config}.
 *
 * @memberof module:vendor.MarkdownIt
 * @typedef {object} Config
 *
 * @property {boolean} [html=false] - enable HTML tags in source
 * @property {boolean} [xhtmlOut=false] - Use '/' to close single tags
 *   `(<br />)`. This is only for full CommonMark compatibility.
 * @property {boolean} [breaks=false] - convert `\n` in paragraphs to `<br>`
 *   HTML tags
 * @property {string} [langPrefix='language-'] - CSS language prefix for fenced
 *   blocks. Can be useful for external highlighters.
 * @property {boolean} [typographer=false] - Enable some language-neutral
 *   replacement + quotes beautification
 * @property {string} [quotes='“”‘’'] - double + single quotes replacement
 *   pairs, when typographer enabled, and smartquotes on. Could be either a
 *   String or an Array. For example, you can use '«»„“' for Russian, '„“‚‘' for
 *   German, and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including
 *   nbsp).
 * @property {Function} [highlight=(str, lang) => ''] - highlighter function.
 *   Should return escaped HTML, or '' if the source string is not changed and
 *   should be escaped externaly. If result starts with <pre... internal wrapper
 *   is skipped.
 */
