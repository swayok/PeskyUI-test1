'use strict'

const peskyUiPkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
    return `/*!
  * PeskyUI${pluginFilename ? ` ${pluginFilename}` : ''} v${peskyUiPkg.version} (${peskyUiPkg.homepage})
  * Copyright 2019-${year} ${peskyUiPkg.author}
  * Licensed under MIT (https://github.com/swayok/PeskyUI/blob/master/LICENSE)
  */`
}

module.exports = getBanner
