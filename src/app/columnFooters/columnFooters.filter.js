(function() {
  'use strict';

  angular
    .module('tower')
    .filter('columnFooters', columnFooters);

  /** @ngInject */
  function columnFooters() {
    return function (input) {
      return input;
    };
  }
})();
