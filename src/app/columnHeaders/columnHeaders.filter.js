(function() {
  'use strict';

  angular
    .module('tower')
    .filter('columnHeaders', columnHeaders);

  /** @ngInject */
  function columnHeaders() {
    return function (input) {
      return input;
    }
  }
})();
