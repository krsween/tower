(function () {
  'use strict';

  describe('Constant: baseURL', function () {

    // load the service's module
    beforeEach(module('tower'));

    // instantiate service
    var baseURL;
    beforeEach(inject(function (_baseURL_) {
      baseURL = _baseURL_;
    }));

    it('should be defined with the API\'s URL.', function () {
      expect(baseURL).toBe('http://geyser-soze:8181/jenkins-scraper');
    });

  });
})();
