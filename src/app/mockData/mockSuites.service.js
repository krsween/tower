(function () {
  'use strict';

  angular
    .module('tower')
    .service('mockSuites', suites);

  /** @ngInject */
  function suites ($q, $timeout) {

    var limit = 10;

    function generateMocks(type) {
      var mockData = [];
      for (var i = 0; i < limit; i++) {
        var suite = {
          id: i,
          suiteName: type + ' ' + (i+1),
          builds: mockBuilds()
        };
        mockData.push(suite);
      }
      return mockData;
    }

    function mockBuilds() {
      var mockBuildData = [];
      for (var i = 0; i < 14; i++) {
        var mockDate = moment(new Date('10-'+(31-i)+'-2015')).format(),
          mockBuild = {
            id: i,
            date: mockDate,
            status: 'pass',
            totalSpecs: 0,
            totalPasses: Math.round(Math.random()*100),
            totalFails: Math.round(Math.random()),
            totalSkips: Math.round(Math.random()*10),
            url: 'http://www.jenkins.com'
          };
        mockBuild.totalSpecs = mockBuild.totalPasses + mockBuild.totalFails;
        if (mockBuild.totalFails > 0) {
          mockBuild.status = 'fail';
        }
        mockBuildData.push(mockBuild);
      }
      return mockBuildData;
    }



    return {
      get: function (type) {
        // Return a promise (makes it more http-like)
        var deferredSuiteData = $q.defer(),
            mockSuiteData = generateMocks(type);

        // $timeout mocks latency/load time
        $timeout(function () {
          deferredSuiteData.resolve(mockSuiteData);
        }, 1500);

        // Return the promise
        return deferredSuiteData.promise;
      }
    };
  }


})();
