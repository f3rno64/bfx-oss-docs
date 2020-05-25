'use strict'

/**
 * Verifies that the provided js project entry file is not forbidden by
 * configured regex. Relies on the `unifiedJSDoc.entryForbidden` configuration
 * array, which may be empty (parsed as an array of regular expression strings)
 *
 * @memberof module:bfx-oss-docs
 * @private
 *
 * @param {string} entry - entry file as found in manifest
 * @param {module:bfx-oss-docs.Config} config - configuration
 * @returns {boolean} isForbidden
 */
const isEntryForbidden = (entry, config) => {
  const { unifiedJSDoc = {} } = config
  const { entryForbidden = [] } = unifiedJSDoc

  return entryForbidden.find(regexString => (
    new RegExp(regexString).test(entry)
  ))
}

module.exports = isEntryForbidden
