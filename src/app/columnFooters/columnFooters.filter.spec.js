(function () {

  'use strict';

  describe('Filter: columnFooters', function () {

    // load the filter's module
    beforeEach(module('tower'));

    // initialize a new instance of the filter before each test
    var columnFooters;
    beforeEach(inject(function ($filter) {
      columnFooters = $filter('columnFooters');
    }));

    it('should return data', function () {
      expect(columnFooters(1)).toBe(1);
    });

  });
})();
