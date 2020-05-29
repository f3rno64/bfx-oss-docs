'use strict'

const _isEmpty = require('lodash/isEmpty')
const codeSampleDataToFileDef = require('./code_sample_data_to_file_def')

/**
 * Readme.IO code samples may need to be split into multiple files, if they
 * contain both an example of a payload format (text labels as field values)
 * and actual example payloads containing real data. The latter can be
 * syntax highlighted, etc.
 *
 * @todo refactor
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {module:bfx-oss-docs.RIOCodeSnippet} sample - code sample object
 * @param {number} [index=0] - sample index in a larger set of code samples.
 *   Used for filename generation fallback
 * @returns {object[]} data - array of data describing final source files
 */
const processRIOSidebarCodeSamples = (sample, index) => {
  const { content } = sample
  const { codes } = content
  const sampleData = []

  codes.forEach(({ language: sampleLangID, name = '', code: codeRaw }) => {
    const code = codeRaw.trim()

    // Some snippets are marked as 'text' but contain JS
    let language = sampleLangID !== 'text'
      ? sampleLangID.toLowerCase()
      : /^javascript$/.test(name.toLowerCase())
        ? 'js'
        : null

    // Try once more by parsing JSON; if success, it's JSON
    // Looks like insanity, but it's due to reading exported data... oh man
    if (language === null) {
      try {
        JSON.parse(code.replace(/\n/g, ''))
        language = 'json'
      } catch (_) {
        language = 'text'
      }
    } else if (language === 'javascript') {
      language = 'js' // convert for our markdown parser
    }

    // JSON samples may contain multiple actual code samples, see this function's
    // doclet
    // TODO: extract
    if (language === 'json') {
      const fileSeperationIndexes = []
      let dataStarted = false
      let startToken = null
      let arrDepth = 0
      let objDepth = 0

      for (let i = 0; i < code.length; i += 1) {
        const c = code[i]

        switch (c) {
          case '[': {
            if (!dataStarted) {
              startToken = '['
              dataStarted = true
            }

            arrDepth += 1
            break
          }

          case '{': {
            if (!dataStarted) {
              startToken = '{'
              dataStarted = true
            }

            objDepth += 1
            break
          }

          case ']': {
            arrDepth -= 1
            break
          }

          case '}': {
            objDepth -= 1
            break
          }

          default: {
            break
          }
        }

        if (dataStarted) {
          if (
            (
              (startToken === '{' && objDepth === 0) ||
              (startToken === '[' && arrDepth === 0)
            ) &&
            /(\{|\[)/.test(code.slice(i + 1))
          ) {
            fileSeperationIndexes.push(i + 1)
            startToken = null
            dataStarted = false
          }
        }
      }

      // Confirmed single sample
      if (_isEmpty(fileSeperationIndexes)) {
        sampleData.push(codeSampleDataToFileDef({
          language,
          name,
          code
        }, index))

        return
      }

      let lastSliceIndex = 0

      fileSeperationIndexes.forEach((index, i) => {
        let codeSnippet = code
          .slice(lastSliceIndex, lastSliceIndex + index + 1)
          .trim()

        let validJSON

        try {
          const snippetData = JSON.parse(codeSnippet)
          validJSON = true

          // prettify just in case, cannot rely on source
          codeSnippet = JSON.stringify(snippetData, null, 2)
        } catch (e) {
          validJSON = false
        }

        lastSliceIndex = index + 1

        let finalName = name

        if (validJSON) {
          finalName += ' sample'
        } else {
          finalName += ' template'
        }

        sampleData.push(codeSampleDataToFileDef({
          language,
          code: codeSnippet,
          name: finalName
        }, i))
      })

      return
    }

    sampleData.push(codeSampleDataToFileDef({
      language,
      name,
      code
    }, index))
  })

  return sampleData
}

module.exports = processRIOSidebarCodeSamples
