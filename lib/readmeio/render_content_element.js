'use strict'

const _isEmpty = require('lodash/isEmpty')
const _flattenDeep = require('lodash/flattenDeep')
const CONTENT_TYPE = require('./content_type')

const renderContentElement = (elm) => {
  const { type } = elm

  switch (type) {
    case CONTENT_TYPE.MARKDOWN: {
      const { content } = elm

      return [
        '<div class="bfx-oss-docs-readmeio-block__markdown">',
        '{% markdown %}',
        content,
        '{% endmarkdown %}',
        '</div>'
      ]
    }

    case CONTENT_TYPE.CODE: {
      const { content } = elm
      const { codes = [] } = content

      return _flattenDeep(codes.map(({ code, language, name }) => ([
        '<div class="bfx-oss-docs-readmeio-block__code">',
        ...(!_isEmpty(name) ? [`<p>${name}</p>`] : []),
        `  {% code '${language}' %}`,
        ...code.split('\n'),
        '  {% endcode %}',
        '</div>'
      ])))
    }

    case CONTENT_TYPE.API_HEADER: {
      const { content = {} } = elm
      const { title } = content

      return [
        `<h3 class="bfx-oss-docs-readmeio-block__api-header">${title}</h3>`
      ]
    }

    case CONTENT_TYPE.CALLOUT: {
      const { content = {} } = elm
      const { type, title, body } = content

      return [
        `<div class="bfx-oss-docs-readmeio-block__callout ${type}">`,
        `<p class="bfx-oss-docs-readmeio-block__callout-title">${title}</p>`,
        `<p class="bfx-oss-docs-readmeio-block__callout-body">${body}</p>`,
        '</div>'
      ]
    }

    default: {
      throw new Error(`Unknown block content type: ${type}`)
    }
  }
}

module.exports = renderContentElement
