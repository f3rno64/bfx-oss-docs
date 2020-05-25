'use strict'

const fs = require('fs')

/**
 * Verifies that the structure present in the config file is valid, and all
 * files are present on disk at the declared location.
 */

const rootPath = `${__dirname}/../../`
const path = p => `${rootPath}/${p}`
const config = fs.readFileSync(path('config.json'))
