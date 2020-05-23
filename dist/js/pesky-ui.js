/*!
  * PeskyUI v0.0.1 (https://github.com/swayok/PeskyUI)
  * Copyright 2020-2020 Filippov Alexander
  * Licensed under MIT (https://github.com/swayok/PeskyUI/blob/master/LICENSE)
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
    typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
    (factory((global['pesky-ui'] = {}),global.jQuery));
}(this, (function (exports,$) { 'use strict';

    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

    var peskyUi = {};

    ($$$1 => {
      if (typeof $$$1 === 'undefined') {
        throw new TypeError('PeskyUI\'s JavaScript requires jQuery. jQuery must be included before PeskyUI\'s JavaScript.');
      }

      const version = $$$1.fn.jquery.split(' ')[0].split('.');
      const minMajor = 1;
      const ltMajor = 2;
      const minMinor = 9;
      const minPatch = 1;
      const maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('PeskyUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    })($);

    exports.PeskyUI = peskyUi;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pesky-ui.js.map
