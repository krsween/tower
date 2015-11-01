(function() {
  'use strict';

  angular
    .module('tower')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
