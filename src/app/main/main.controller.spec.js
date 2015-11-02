(function() {
  'use strict';

  describe('Controller: Main', function(){

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

    it('should define more than 5 awesome things', function() {
      expect(1).toBe(1);
    });
  });
})();
