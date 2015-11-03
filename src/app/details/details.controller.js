(function() {
  'use strict';

  angular
    .module('tower')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($scope, $routeParams, mockSuites) {
    var vm = this;
    //$scope.singleSuiteResults = mockSingleSuiteResults();


    mockSuites.get('mockSpec.functions.utils')
      .then(function (mockData) {
        // Assign the response data to the scope.
        $scope.suites = mockData;
        // Calculate Column Totals
        //$scope.suiteColumnTotals = vm.calculateColumnTotals(mockData);
      }, function () {
        $log.error('The suites service is failing.');
      });


/*



    function mockSingleSuiteResults () {
      var mockSingleSuite = [];
      for (var i = 0; i < 25; i++) {
        var mockTestSpec = {
          id: i,
          specName: 'mockSpec.Utility.function ' + i,
          totalPass: Math.round(Math.random()*10),
          totalFail: Math.round(Math.random()),
          totalSpecs: (this.totalPass + this.totalFail),
          status: this.totalFail === 0 ? 'pass' : 'fail'
        };
        mockSingleSuite.push(mockTestSpec);
      }
      return mockSingleSuite;
    }

    function mockDateRangeResults () {
      return mockDateRage;
    }
*/
  }
})();
