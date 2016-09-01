/* eslint-disable */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-headroom',

  included: function(app) {
    this._super.included(app);
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {

      // Fix for loading it in addons/engines
      if (typeof app.import !== 'function' && app.app) {
        app = app.app;
      }

      app.import(app.bowerDirectory + '/headroom.js/dist/headroom.min.js');
      app.import('vendor/ember-headroom/ember-headroom-shim.js', {
        exports: {
          headroom: ['default']
        }
      });
    }
  },

  treeForVendor: function() {
    return path.join(__dirname, 'client');
  }
};
