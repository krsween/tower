(function() {
  'use strict';

  describe('Controller: MainController', function(){

    beforeEach(module('tower'));

    var MainController,
        scope;


    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();

      MainController = $controller('MainController', {
        $scope: scope
        // place here mocked dependencies
      });


    }));

    describe('Function: humanizeDatestamp(date)', function () {
        it('should be defined', function () {
            expect(scope.humanizeDatestamp).toBeDefined();
        });
        it('should return a friendly version of today\'s date.', function () {
          var mockDateNow = new Date(),
              mockDateWeekAgo = moment(mockDateNow).subtract(1, 'week').format().toString();
          expect(scope.humanizeDatestamp(mockDateNow)).toBe('a few seconds ago');
          expect(scope.humanizeDatestamp(mockDateWeekAgo)).toBe('7 days ago');
        });
    });
  });
})();
