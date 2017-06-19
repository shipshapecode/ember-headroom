/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-headroom',

  options: {
    nodeAssets: {
      'headroom.js': {
        vendor: {
          include: ['dist/headroom.min.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/headroom.js/dist/headroom.min.js', {
      using: [{ transformation: 'amd', as: 'headroom' }]
    });
  }
};
