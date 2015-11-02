(function() {
  'use strict';



  describe('Controller: DetailsController', function(){

    beforeEach(module('tower'));


    var DetailsController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      DetailsController = $controller('DetailsController', {
        $scope: scope
      });

    }));

    it('should define more than 5 awesome things', function() {
      expect(1).toBe(1);
    });
  });
})();
