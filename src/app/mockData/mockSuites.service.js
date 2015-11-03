(function () {
  'use strict';

  angular
    .module('tower')
    .service('mockSuites', suites);

  /** @ngInject */
  function suites ($q, $timeout) {

    // Fictitious limit of rows
    var limit = 10;

    /**
     * @name generateMocks
     * @param type - The type (as a string) of mocks to generate.
     * @returns {Array} - A collection of mocks.
     */
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

    /**
     * @name mockBuilds
     * @returns {Array} - A collection of mocks build data (ex. passes, fails, etc.)
     */
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

        // TODO: since this sends back a promise to the controller just like and HTTP call, this service should be the
        // only thing that needs to be refactored when there's live data.
        
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
