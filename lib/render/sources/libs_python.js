'use strict'

const _isEmpty = require('lodash/isEmpty')
const buildLibsAny = require('./libs_any')

const LIST_REGEX = /\n-/g
const LIST_REGEX_OUT = '\n*'

const RAW_PARAM_NOTYPE_REGEX = /\n@param\s+(\w*):\s(\S*)/g
const RAW_PARAM_NOTYPE_REGEX_OUT = '\n* `@param $1`: $2\n'

const RAW_PARAM_TYPE_REGEX = /\n@param\s+(\w*)\s+([\w<>.]*):\s(\S*)/g
const RAW_PARAM_TYPE_REGEX_OUT = '\n* `@param $1`: $2\n'

const RAW_ATTR_START_REGEX = /\n\n@param/g
const RAW_ATTR_START_REGEX_OUT = [
  '\n\n__Attributes__\n',
  '| PARAM | TYPE | DESCRIPTION |',
  '| --- | --- | --- |\n'
].join('\n') + '@param'

const ATTR_START_REGEX = /\n__Attributes__\n\n\* `@param/g
const ATTR_START_REGEX_OUT = [
  '\n__Attributes__\n',
  '| PARAM | TYPE | DESCRIPTION |',
  '| --- | --- | --- |\n'
].join('\n') + '* `@param'

const NOWRAP_LINE = /^\*/
const WRAPPED_LINE = /^\s+\S/

const ATTR_REGEX = /^\* `(?:@param\s+)?(\w*)(?:\s([\w<>.]+))?`:\s(.*)$/
const ATTR_REGEX_OUT = '| $1 | <code>$2</code> | $3 |'
const ATTR_END_REGEX = /^((\*\*)|(<a)|$)/

const CODE_BLOCK_START_REGEX = /^```python$/
const CODE_BLOCK_END_REGEX = /^```$/
const CODE_BLOCK_PREFIX_REGEX = /^\s\|(\s*)(.*)/

const RETURN_NOTYPE_REGEX = /\n@return\s(.*)\n/g
const RETURN_NOTYPE_REGEX_OUT = '\n**Returns**: `$1`\n'

const RETURN_TYPE_REGEX = /\n@return\s(\w*)\s(.*)\n/g
const RETURN_TYPE_REGEX_OUT = '\n**Returns**: `$2` - $1\n'

/**
 * @memberof module:bfx-oss-docs
 * @private
 * @async
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {Promise} p
 */
const buildLibsPython = async (config) => {
  return buildLibsAny('py', config, (md) => {
    const lines = md
      .replace(LIST_REGEX, LIST_REGEX_OUT)
      .replace(RAW_ATTR_START_REGEX, RAW_ATTR_START_REGEX_OUT)
      .replace(ATTR_START_REGEX, ATTR_START_REGEX_OUT)
      .replace(RAW_PARAM_NOTYPE_REGEX, RAW_PARAM_NOTYPE_REGEX_OUT)
      .replace(RAW_PARAM_TYPE_REGEX, RAW_PARAM_TYPE_REGEX_OUT)
      .replace(RETURN_NOTYPE_REGEX, RETURN_NOTYPE_REGEX_OUT)
      .replace(RETURN_TYPE_REGEX, RETURN_TYPE_REGEX_OUT)
      .split('\n')

    // Unwrap attribute list entries
    for (let i = 0; i < lines.length - 1; i += 1) {
      let wrapped = false

      do {
        const l = lines[i]
        const nextL = lines[i + 1]

        if (NOWRAP_LINE.test(l) && (
          WRAPPED_LINE.test(nextL) || _isEmpty(nextL.trim())
        )) {
          if (!_isEmpty(nextL.trim())) {
            lines[i] += ` ${lines[i + 1].trim()}`
          }

          lines.splice(i + 1, 1)
          i -= 1
          wrapped = true
        } else {
          wrapped = false
        }
      } while (wrapped && i < lines.length - 1)
    }

    let sawAtLeastOneAttribute = false
    let inAttributesBlock = false

    // Convert attribute lists to table rows & add newline after list end
    lines.forEach((l, i) => {
      if (l === '__Attributes__') {
        inAttributesBlock = true
        sawAtLeastOneAttribute = false
      } else if (inAttributesBlock) {
        if (ATTR_REGEX.test(l)) {
          lines[i] = l.replace(ATTR_REGEX, ATTR_REGEX_OUT)
          sawAtLeastOneAttribute = true
        } else if (sawAtLeastOneAttribute && ATTR_END_REGEX.test(l)) {
          inAttributesBlock = false
          lines[i] = `\n${l}`
        }
      }
    })

    // Remove ' | ' prefix from code block lines for syntax highlighting
    let inCodeBlock = false

    lines.forEach((l, i) => {
      if (CODE_BLOCK_START_REGEX.test(l)) {
        inCodeBlock = true
      } else if (CODE_BLOCK_END_REGEX.test(l)) {
        inCodeBlock = false
      } else if (inCodeBlock) {
        const matches = CODE_BLOCK_PREFIX_REGEX.exec(l)

        if (matches) {
          const [, prev, code] = matches
          const wsL = Math.ceil(prev.length / 2)
          let newL = ''

          for (let j = 0; j < wsL; j += 1) {
            newL += '  '
          }

          newL += code
          lines[i] = newL
        }
      }
    })

    return `::: api-docs-index\n[[toc]]\n:::\n\n${lines.join('\n')}`
  })
}

module.exports = buildLibsPython
