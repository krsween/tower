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

    it('should have a collection of suite results defined', function() {
      expect(scope.singleSuiteResults).toBeDefined();
    });
  });
})();
