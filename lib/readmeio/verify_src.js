'use strict'

const signale = require('signale')
const throwIfNoFile = require('../util/throw_if_no_file')
const verifyReadmeIOSrcSection = require('./verify_src_section')

/**
 * Verifies that the structure present in the config file is valid, and all
 * files are present on disk at the declared location.
 *
 * @throws {Error} fails if any configured source file is missing
 * @memberof module:bfx-oss-docs
 *
 * @param {module:bfx-oss-docs.Config} config - config
 * @param {boolean} log - enables signale logging
 */
const verifyReadmeIOSrc = (config, log) => {
  const { readmeIOData = {} } = config
  const { root, structure = {} } = readmeIOData
  const l = path => log && signale.success('path %s exists', path)

  throwIfNoFile(root)
  l(root)

  const { v2 = {} } = structure
  const { path, overview = [], documentation = [] } = v2
  const v2Path = `${root}/${path}`

  throwIfNoFile(v2Path)
  l(v2Path)

  overview.forEach(s => verifyReadmeIOSrcSection(config, 'v2', s, log))
  documentation.forEach(s => verifyReadmeIOSrcSection(config, 'v2', s, log))
}

module.exports = verifyReadmeIOSrc
