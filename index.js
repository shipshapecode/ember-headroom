/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-headroom',

  options: {
    nodeAssets: {
      'headroom.js': {
        vendor: ['dist/headroom.min.js']
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.import('vendor/headroom.js/dist/headroom.min.js', {
        using: [{ transformation: 'amd', as: 'headroom' }]
      });
    }
  }
};
