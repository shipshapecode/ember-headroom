/* globals Headroom */

define('headroom', [], function() {
  'use strict';

  if (typeof FastBoot === 'undefined') {
    return {
      default: Headroom
    };
  }

  return { default: undefined };
});
