(function() {
  'use strict';

  angular
    .module('tower')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($scope, $routeParams) {
    var vm = this;
    //$scope.singleSuiteResults = mockSingleSuiteResults();



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
