'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')

const pkg     = require(path.resolve(__dirname, '../package.json'))
const BUNDLE  = process.env.BUNDLE === 'true'
const year    = new Date().getFullYear()

let fileDest  = 'pesky-ui.js'
const external = ['jquery', 'bootstrap']
const plugins = [
  babel({
    exclude: 'node_modules/**', // Only transpile our source code
    externalHelpersWhitelist: [ // Include only required helpers
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'defineProperty',
      'objectSpread'
    ]
  })
]
const globals = {
  jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
}

if (BUNDLE) {
  fileDest = 'pesky-ui.bundle.js'
  plugins.push(resolve())
}

module.exports = {
  input: path.resolve(__dirname, '../js/index.js'),
  output: {
    banner: `/*!
  * PeskyUI v${pkg.version} (${pkg.homepage})
  * Copyright 2020-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/swayok/PeskyUI/blob/master/LICENSE)
  */`,
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd',
    globals,
    name: 'pesky-ui'
  },
  external,
  plugins
}
