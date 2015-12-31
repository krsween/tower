(function () {
  'use strict';

  angular
    .module('tower')
    .service('jenkinsData', jenkinsData);

  /** @ngInject */
  function jenkinsData ($http, baseURL) {

    return {
      get: function () {
        var date = '20151215';
        return $http.get(baseURL + '/suiteRunAggregateByDate/' + date);
      }
    };
  }


})();
