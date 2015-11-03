(function () {
  'use strict';

  describe('Service: mockSuites', function () {

    // load the service's module
    beforeEach(module('tower'));

    // instantiate service
    var mockSuites;
    beforeEach(inject(function (_mockSuites_) {
      mockSuites = _mockSuites_;
    }));

    it('should have a get() method for retrieving mock data.', function () {
      expect(mockSuites.get).toBeDefined();
    });

  });
})();
