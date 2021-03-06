(function () {
  'use strict';

  angular
    .module('tower')
    .service('columnTotals', columnTotals);

  /** @ngInject */
  function columnTotals () {
    return {
      calculateTotals: function (columnData) {
        if (columnData) {
          var columnTotals = {};
          // Loop through the suites
          angular.forEach(columnData, function (suite) {
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
        return columnData;
      }
    };
  }
})();
