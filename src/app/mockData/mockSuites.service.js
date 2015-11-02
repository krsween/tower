(function () {
  'use strict';

  angular
    .module('tower')
    .service('mockSuites', mockSuites);

  /** @ngInject */
  function mockSuites ($q, $timeout) {

    var mockSuiteData = [{"id":0,"suiteName":"Suite 1","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"fail","totalSpecs":49,"totalPasses":48,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"fail","totalSpecs":36,"totalPasses":35,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":56,"totalPasses":55,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":26,"totalPasses":25,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"fail","totalSpecs":58,"totalPasses":57,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"fail","totalSpecs":28,"totalPasses":27,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"fail","totalSpecs":99,"totalPasses":98,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":74,"totalPasses":74,"totalFails":0,"totalSkips":0,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"pass","totalSpecs":18,"totalPasses":18,"totalFails":0,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"pass","totalSpecs":12,"totalPasses":12,"totalFails":0,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"pass","totalSpecs":25,"totalPasses":25,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"fail","totalSpecs":99,"totalPasses":98,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":42,"totalPasses":41,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"fail","totalSpecs":67,"totalPasses":66,"totalFails":1,"totalSkips":1,"url":"http://www.jenkins.com"}]},{"id":1,"suiteName":"Suite 2","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"fail","totalSpecs":30,"totalPasses":29,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":80,"totalPasses":80,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":42,"totalPasses":41,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":100,"totalPasses":99,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"fail","totalSpecs":30,"totalPasses":29,"totalFails":1,"totalSkips":0,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"pass","totalSpecs":57,"totalPasses":57,"totalFails":0,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"pass","totalSpecs":28,"totalPasses":28,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":37,"totalPasses":37,"totalFails":0,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"pass","totalSpecs":96,"totalPasses":96,"totalFails":0,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"pass","totalSpecs":85,"totalPasses":85,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":49,"totalPasses":48,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"pass","totalSpecs":65,"totalPasses":65,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":68,"totalPasses":67,"totalFails":1,"totalSkips":10,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"pass","totalSpecs":35,"totalPasses":35,"totalFails":0,"totalSkips":8,"url":"http://www.jenkins.com"}]},{"id":2,"suiteName":"Suite 3","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"pass","totalSpecs":31,"totalPasses":31,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":6,"totalPasses":6,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"pass","totalSpecs":36,"totalPasses":36,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"pass","totalSpecs":24,"totalPasses":24,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"fail","totalSpecs":82,"totalPasses":81,"totalFails":1,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"pass","totalSpecs":1,"totalPasses":1,"totalFails":0,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"fail","totalSpecs":67,"totalPasses":66,"totalFails":1,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":4,"totalPasses":4,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"pass","totalSpecs":79,"totalPasses":79,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"pass","totalSpecs":75,"totalPasses":75,"totalFails":0,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":75,"totalPasses":74,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"pass","totalSpecs":21,"totalPasses":21,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":15,"totalPasses":14,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"pass","totalSpecs":18,"totalPasses":18,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"}]},{"id":3,"suiteName":"Suite 4","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"pass","totalSpecs":73,"totalPasses":73,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"fail","totalSpecs":29,"totalPasses":28,"totalFails":1,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":93,"totalPasses":92,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":5,"totalPasses":4,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"pass","totalSpecs":39,"totalPasses":39,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"fail","totalSpecs":47,"totalPasses":46,"totalFails":1,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"pass","totalSpecs":40,"totalPasses":40,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"fail","totalSpecs":46,"totalPasses":45,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"fail","totalSpecs":57,"totalPasses":56,"totalFails":1,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"fail","totalSpecs":49,"totalPasses":48,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":32,"totalPasses":31,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"fail","totalSpecs":11,"totalPasses":10,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"pass","totalSpecs":50,"totalPasses":50,"totalFails":0,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"pass","totalSpecs":15,"totalPasses":15,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"}]},{"id":4,"suiteName":"Suite 5","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"pass","totalSpecs":59,"totalPasses":59,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":21,"totalPasses":21,"totalFails":0,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":91,"totalPasses":90,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":22,"totalPasses":21,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"fail","totalSpecs":89,"totalPasses":88,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"pass","totalSpecs":77,"totalPasses":77,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"fail","totalSpecs":73,"totalPasses":72,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":68,"totalPasses":68,"totalFails":0,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"fail","totalSpecs":68,"totalPasses":67,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"fail","totalSpecs":84,"totalPasses":83,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":16,"totalPasses":15,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"pass","totalSpecs":9,"totalPasses":9,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":77,"totalPasses":76,"totalFails":1,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"pass","totalSpecs":37,"totalPasses":37,"totalFails":0,"totalSkips":8,"url":"http://www.jenkins.com"}]},{"id":5,"suiteName":"Suite 6","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"fail","totalSpecs":19,"totalPasses":18,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"fail","totalSpecs":100,"totalPasses":99,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":44,"totalPasses":43,"totalFails":1,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":36,"totalPasses":35,"totalFails":1,"totalSkips":0,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"fail","totalSpecs":22,"totalPasses":21,"totalFails":1,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"pass","totalSpecs":95,"totalPasses":95,"totalFails":0,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"pass","totalSpecs":11,"totalPasses":11,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":51,"totalPasses":51,"totalFails":0,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"fail","totalSpecs":39,"totalPasses":38,"totalFails":1,"totalSkips":10,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"pass","totalSpecs":97,"totalPasses":97,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"pass","totalSpecs":88,"totalPasses":88,"totalFails":0,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"fail","totalSpecs":9,"totalPasses":8,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"pass","totalSpecs":55,"totalPasses":55,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"fail","totalSpecs":67,"totalPasses":66,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"}]},{"id":6,"suiteName":"Suite 7","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"fail","totalSpecs":3,"totalPasses":2,"totalFails":1,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":54,"totalPasses":54,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":42,"totalPasses":41,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"pass","totalSpecs":72,"totalPasses":72,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"pass","totalSpecs":53,"totalPasses":53,"totalFails":0,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"fail","totalSpecs":76,"totalPasses":75,"totalFails":1,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"pass","totalSpecs":24,"totalPasses":24,"totalFails":0,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"fail","totalSpecs":18,"totalPasses":17,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"fail","totalSpecs":89,"totalPasses":88,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"pass","totalSpecs":10,"totalPasses":10,"totalFails":0,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"pass","totalSpecs":85,"totalPasses":85,"totalFails":0,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"pass","totalSpecs":19,"totalPasses":19,"totalFails":0,"totalSkips":0,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":54,"totalPasses":53,"totalFails":1,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"pass","totalSpecs":46,"totalPasses":46,"totalFails":0,"totalSkips":0,"url":"http://www.jenkins.com"}]},{"id":7,"suiteName":"Suite 8","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"pass","totalSpecs":28,"totalPasses":28,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":71,"totalPasses":71,"totalFails":0,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"fail","totalSpecs":39,"totalPasses":38,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":36,"totalPasses":35,"totalFails":1,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"pass","totalSpecs":29,"totalPasses":29,"totalFails":0,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"pass","totalSpecs":6,"totalPasses":6,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"fail","totalSpecs":7,"totalPasses":6,"totalFails":1,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":65,"totalPasses":65,"totalFails":0,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"pass","totalSpecs":41,"totalPasses":41,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"fail","totalSpecs":49,"totalPasses":48,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":95,"totalPasses":94,"totalFails":1,"totalSkips":8,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"fail","totalSpecs":68,"totalPasses":67,"totalFails":1,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"pass","totalSpecs":18,"totalPasses":18,"totalFails":0,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"fail","totalSpecs":29,"totalPasses":28,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"}]},{"id":8,"suiteName":"Suite 9","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"pass","totalSpecs":23,"totalPasses":23,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":26,"totalPasses":26,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"pass","totalSpecs":98,"totalPasses":98,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"fail","totalSpecs":90,"totalPasses":89,"totalFails":1,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"fail","totalSpecs":9,"totalPasses":8,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"fail","totalSpecs":27,"totalPasses":26,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"pass","totalSpecs":85,"totalPasses":85,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"fail","totalSpecs":55,"totalPasses":54,"totalFails":1,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"fail","totalSpecs":73,"totalPasses":72,"totalFails":1,"totalSkips":2,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"pass","totalSpecs":7,"totalPasses":7,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":25,"totalPasses":24,"totalFails":1,"totalSkips":7,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"fail","totalSpecs":76,"totalPasses":75,"totalFails":1,"totalSkips":10,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":16,"totalPasses":15,"totalFails":1,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"pass","totalSpecs":38,"totalPasses":38,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"}]},{"id":9,"suiteName":"Suite 10","builds":[{"id":0,"date":"2015-10-31T04:00:00.000Z","status":"fail","totalSpecs":21,"totalPasses":20,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":1,"date":"2015-10-30T04:00:00.000Z","status":"pass","totalSpecs":58,"totalPasses":58,"totalFails":0,"totalSkips":9,"url":"http://www.jenkins.com"},{"id":2,"date":"2015-10-29T04:00:00.000Z","status":"pass","totalSpecs":71,"totalPasses":71,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":3,"date":"2015-10-28T04:00:00.000Z","status":"pass","totalSpecs":72,"totalPasses":72,"totalFails":0,"totalSkips":5,"url":"http://www.jenkins.com"},{"id":4,"date":"2015-10-27T04:00:00.000Z","status":"pass","totalSpecs":70,"totalPasses":70,"totalFails":0,"totalSkips":0,"url":"http://www.jenkins.com"},{"id":5,"date":"2015-10-26T04:00:00.000Z","status":"fail","totalSpecs":42,"totalPasses":41,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":6,"date":"2015-10-25T04:00:00.000Z","status":"fail","totalSpecs":71,"totalPasses":70,"totalFails":1,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":7,"date":"2015-10-24T04:00:00.000Z","status":"pass","totalSpecs":8,"totalPasses":8,"totalFails":0,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":8,"date":"2015-10-23T04:00:00.000Z","status":"pass","totalSpecs":38,"totalPasses":38,"totalFails":0,"totalSkips":4,"url":"http://www.jenkins.com"},{"id":9,"date":"2015-10-22T04:00:00.000Z","status":"fail","totalSpecs":79,"totalPasses":78,"totalFails":1,"totalSkips":3,"url":"http://www.jenkins.com"},{"id":10,"date":"2015-10-21T04:00:00.000Z","status":"fail","totalSpecs":89,"totalPasses":88,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":11,"date":"2015-10-20T04:00:00.000Z","status":"pass","totalSpecs":7,"totalPasses":7,"totalFails":0,"totalSkips":1,"url":"http://www.jenkins.com"},{"id":12,"date":"2015-10-19T04:00:00.000Z","status":"fail","totalSpecs":84,"totalPasses":83,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"},{"id":13,"date":"2015-10-18T04:00:00.000Z","status":"fail","totalSpecs":84,"totalPasses":83,"totalFails":1,"totalSkips":6,"url":"http://www.jenkins.com"}]}];

    return {
      get: function () {

        // Return a promise (makes it more http-like)
        var deferredSuiteData = $q.defer();

        // $timeout mocks latency/load time
        $timeout(function () {
          deferredSuiteData.resolve(mockSuiteData);
        }, 500);

        // Return the promise
        return deferredSuiteData.promise;
      }
    };
  }


})();
