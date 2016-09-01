(function() {
  /* globals define, Headroom */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('headroom', { 'default': Headroom });
})();
