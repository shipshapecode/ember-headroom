/* eslint-disable */

'use strict';

module.exports = {
  description: 'Imports Headroom dependency from Bower',

  normalizeEntityName: function() {
    // no-op
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('headroom.js', 'https://unpkg.com/headroom.js/bower.zip', '');
  }
};
