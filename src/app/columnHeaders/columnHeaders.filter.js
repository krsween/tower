(function() {
  'use strict';

  angular
    .module('tower')
    .filter('columnHeaders', columnHeaders);

  /** @ngInject */
  function columnHeaders() {
    return function (input) {
      // Define a collection to contain all the dates from the suite builds
      var dates = [];
      // Only process when data is present
      if (input) {
        // Loop through the collection of suites
        angular.forEach(input, function (suite) {
          // Loop through the collection of builds inside of each suite
          angular.forEach(suite.builds, function (build) {
            if (dates.indexOf(build.date) === -1) {
              dates.push(build.date);
            }
          });
        });
        return dates;
      } else {
        return input;
      }
    };
  }
})();
