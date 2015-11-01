(function() {
  'use strict';

  angular
    .module('tower')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/details/:suiteId', {
        templateUrl: 'app/details/details.html',
        controller: 'DetailsController',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
