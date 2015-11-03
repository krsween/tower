/* globals moment */
(function () {
  'use strict';

  angular
    .module('tower')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, mockSuites, $log) {
    // Global vars
    var vm = this;
    $scope.suiteColumnTotals = [];
    $scope.suites = [];


    mockSuites.get('Suite')
      .then(function (mockData) {
        // Assign the response data to the scope.
        $scope.suites = mockData;
        // Calculate Column Totals
        $scope.suiteColumnTotals = vm.calculateColumnTotals(mockData);
      }, function () {
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


    /**
     * @name calculateColumnTotals
     * @param suites - all the suite information
     * @returns {Array} - Returns all the column totals for the view.
       */
    vm.calculateColumnTotals = function (suites) {
      if (suites) {
        var columnTotals = {};
        // Loop through the suites
        angular.forEach(suites, function (suite) {
          // Loop through each build
          angular.forEach(suite.builds, function (build) {
            if(!columnTotals[build.date]){
              columnTotals[build.date] = {
                totalPasses: 0,
                totalFails: 0,
                totalSpecs: 0,
                runs: 0,
                buildFails: 0
              };
            }
            // Add new totals to existing object
            columnTotals[build.date].totalPasses += build.totalPasses;
            columnTotals[build.date].totalFails += build.totalFails;
            columnTotals[build.date].totalSpecs += build.totalSpecs;
            columnTotals[build.date].runs += 1;
            // Add up each failure
            if (build.status === 'fail') {
              columnTotals[build.date].buildFails += 1;
            }
          });
        });
        return columnTotals;
      }
      return suites;
    }
  }
})();
