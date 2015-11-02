/* globals moment */
(function () {
  'use strict';

  angular
    .module('tower')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, mockSuites, $log) {
    var vm = this;

    mockSuites.get()
      .then(function (mockData) {
        $scope.mockSuites = mockData;
      }, function () {
        $log.error('The mockSuites service is failing.');
      });


    $scope.humanizeDatestamp = function (date) {
      var today = moment(new Date()),
          then = moment(date);

      return then.from(today);
    };

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1446412335623;
    // vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }
    //
    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();
    //
    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
