(function () {
  'use strict';

  describe('Service: suites', function () {

    // load the service's module
    beforeEach(module('tower'));

    // instantiate service
    var mockSuites;
    beforeEach(inject(function (_mockSuites_) {
      suites = _mockSuites_;
    }));

    it('should have a get() method for retrieving mock data.', function () {
      expect(suites.get).toBeDefined();
    });

  });
})();
