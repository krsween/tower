/*globals moment*/
(function () {
  'use strict';

  angular
    .module('tower')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, mockSuites, $log, columnTotals, jenkinsData) {
    // Global vars
    $scope.suiteColumnTotals = [];
    $scope.suites = [];

    jenkinsData.get()
      .then(function (data) {
        console.log(data.data);
      }, function (err) {
        console.log(err);
      });


    /**
     * @name mockSuites
     * @description - This service should be returning the two weeks of suite runs for all suites.
     */
    mockSuites.get('Suite')
      .then(function (mockData) {
        // Assign the response data to the scope.
        $scope.suites = mockData;
        // Calculate Column Totals
        $scope.suiteColumnTotals = columnTotals.calculateTotals(mockData);
      }, function () {
        // TODO: Errors should be reported to the user; however, to what extent will be determined by the API.
        $log.error('The suites service is failing.');
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
