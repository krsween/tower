(function() {
  'use strict';

  angular
    .module('tower')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($scope, $routeParams, mockSuites, columnTotals, $log) {
    /**
     * @name singleSuiteResults
     * @type {Array} - a collection of single suite runs
     * @description -
     */
    $scope.singleSuiteResults = [];

    /**
     * @name mockSuites
     * @description - This service should be returning the two weeks of runs against each spec in the suite.
     */
    mockSuites.get('mockSpec.functions.utils')
      .then(function (mockData) {
        // Assign the response data to the scope.
        $scope.singleSuiteResults = mockData;
        // Calculate Column Totals
        $scope.suiteColumnTotals = columnTotals.calculateTotals(mockData);
      }, function () {
        // TODO: Errors should be reported to the user; however, to what extent will be determined by the API.
        $log.error('The suites service is failing.');
      });
  }
})();
