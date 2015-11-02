(function () {

  'use strict';

  describe('Filter: columnHeaders', function () {

    // load the filter's module
    beforeEach(module('tower'));

    // initialize a new instance of the filter before each test
    var columnHeaders;
    beforeEach(inject(function ($filter) {
      columnHeaders = $filter('columnHeaders');
    }));

    it('should return data', function () {

      expect(columnHeaders(1)).toBe(1);
    });

  });
})();
