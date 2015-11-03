(function () {
  'use strict';

  angular
    .module('tower')
    .directive('clear', clear);

  /** @ngInject */
  function clear () {
    return {
      restrict: 'E',
      template: '<div class="clearfix">&nbsp;</div>',
      replace: true
    };
  }


})();
