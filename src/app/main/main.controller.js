/*globals moment*/
(function () {
  'use strict';

  angular
    .module('tower')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, mockSuites, $log, columnTotals, baseURL, $http) {
    // Global vars
    $scope.suiteColumnTotals = [];
    $scope.suites = [];



    /*  -- WIP BEGIN -- */


    var bigData = [],
      i,
      suiteRunDate = moment().format("YYYYMMDD");

    for (i = 0; i < 14; i++) {
      $http.get(baseURL + '/suiteRunAggregateByDate/' + suiteRunDate)
        .then(function (data) {
          bigData.push(data.data);
        }, function () {
          $log.error('The API has thrown an error')
        });
      suiteRunDate = moment().subtract(i, 'days').format("YYYYMMDD");
    }

    window.setTimeout(function () {
      console.log(bigData);
    }, 5000);


    /*  -- WIP END -- */






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
