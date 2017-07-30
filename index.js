/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-headroom',

  options: {
    nodeAssets: {
      'headroom.js': {
        vendor: {
          srcDir: 'dist',
          destDir: 'headroom',
          include: ['headroom.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/headroom/headroom.js');

    this.import('vendor/headroom/shim.js', {
      type: 'vendor',
      exports: {
        headroom: ['default']
      }
    });
  }
};
