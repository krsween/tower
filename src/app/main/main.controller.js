/* globals moment */
(function () {
  'use strict';

  angular
    .module('tower')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, mockSuites, $log) {
    //var vm = this;

    mockSuites.get()
      .then(function (mockData) {
        $scope.mockSuites = mockData;
      }, function () {
        $log.error('The mockSuites service is failing.');
      });

    /**
     * @name humanizeDatestamp
     * @param date - a date string
     * @returns {String} - The friendly version of the date (i.e. '2 days ago')
     */
    $scope.humanizeDatestamp = function (date) {
      var today = moment(new Date()),
          then = moment(date);
      return then.from(today);
    };
  }
})();
