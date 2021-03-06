(function () {
  'use strict';

  describe('Service: columnTotals', function () {

    // Globals
    var columnTotals,
        mockData = [{'id':0,'suiteName':'Suite 1','builds':[{'id':0,'date':'2015-10-31T04:00:00.000Z','status':'fail','totalSpecs':49,'totalPasses':48,'totalFails':1,'totalSkips':8,'url':'http://www.jenkins.com'},{'id':1,'date':'2015-10-30T04:00:00.000Z','status':'fail','totalSpecs':36,'totalPasses':35,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':2,'date':'2015-10-29T04:00:00.000Z','status':'fail','totalSpecs':56,'totalPasses':55,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':3,'date':'2015-10-28T04:00:00.000Z','status':'fail','totalSpecs':26,'totalPasses':25,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':4,'date':'2015-10-27T04:00:00.000Z','status':'fail','totalSpecs':58,'totalPasses':57,'totalFails':1,'totalSkips':6,'url':'http://www.jenkins.com'},{'id':5,'date':'2015-10-26T04:00:00.000Z','status':'fail','totalSpecs':28,'totalPasses':27,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':6,'date':'2015-10-25T04:00:00.000Z','status':'fail','totalSpecs':99,'totalPasses':98,'totalFails':1,'totalSkips':3,'url':'http://www.jenkins.com'},{'id':7,'date':'2015-10-24T04:00:00.000Z','status':'pass','totalSpecs':74,'totalPasses':74,'totalFails':0,'totalSkips':0,'url':'http://www.jenkins.com'},{'id':8,'date':'2015-10-23T04:00:00.000Z','status':'pass','totalSpecs':18,'totalPasses':18,'totalFails':0,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':9,'date':'2015-10-22T04:00:00.000Z','status':'pass','totalSpecs':12,'totalPasses':12,'totalFails':0,'totalSkips':9,'url':'http://www.jenkins.com'},{'id':10,'date':'2015-10-21T04:00:00.000Z','status':'pass','totalSpecs':25,'totalPasses':25,'totalFails':0,'totalSkips':5,'url':'http://www.jenkins.com'},{'id':11,'date':'2015-10-20T04:00:00.000Z','status':'fail','totalSpecs':99,'totalPasses':98,'totalFails':1,'totalSkips':8,'url':'http://www.jenkins.com'},{'id':12,'date':'2015-10-19T04:00:00.000Z','status':'fail','totalSpecs':42,'totalPasses':41,'totalFails':1,'totalSkips':2,'url':'http://www.jenkins.com'},{'id':13,'date':'2015-10-18T04:00:00.000Z','status':'fail','totalSpecs':67,'totalPasses':66,'totalFails':1,'totalSkips':1,'url':'http://www.jenkins.com'}]},{'id':1,'suiteName':'Suite 2','builds':[{'id':0,'date':'2015-10-31T04:00:00.000Z','status':'fail','totalSpecs':30,'totalPasses':29,'totalFails':1,'totalSkips':8,'url':'http://www.jenkins.com'},{'id':1,'date':'2015-10-30T04:00:00.000Z','status':'pass','totalSpecs':80,'totalPasses':80,'totalFails':0,'totalSkips':5,'url':'http://www.jenkins.com'},{'id':2,'date':'2015-10-29T04:00:00.000Z','status':'fail','totalSpecs':42,'totalPasses':41,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':3,'date':'2015-10-28T04:00:00.000Z','status':'fail','totalSpecs':100,'totalPasses':99,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':4,'date':'2015-10-27T04:00:00.000Z','status':'fail','totalSpecs':30,'totalPasses':29,'totalFails':1,'totalSkips':0,'url':'http://www.jenkins.com'},{'id':5,'date':'2015-10-26T04:00:00.000Z','status':'pass','totalSpecs':57,'totalPasses':57,'totalFails':0,'totalSkips':6,'url':'http://www.jenkins.com'},{'id':6,'date':'2015-10-25T04:00:00.000Z','status':'pass','totalSpecs':28,'totalPasses':28,'totalFails':0,'totalSkips':1,'url':'http://www.jenkins.com'},{'id':7,'date':'2015-10-24T04:00:00.000Z','status':'pass','totalSpecs':37,'totalPasses':37,'totalFails':0,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':8,'date':'2015-10-23T04:00:00.000Z','status':'pass','totalSpecs':96,'totalPasses':96,'totalFails':0,'totalSkips':2,'url':'http://www.jenkins.com'},{'id':9,'date':'2015-10-22T04:00:00.000Z','status':'pass','totalSpecs':85,'totalPasses':85,'totalFails':0,'totalSkips':5,'url':'http://www.jenkins.com'},{'id':10,'date':'2015-10-21T04:00:00.000Z','status':'fail','totalSpecs':49,'totalPasses':48,'totalFails':1,'totalSkips':4,'url':'http://www.jenkins.com'},{'id':11,'date':'2015-10-20T04:00:00.000Z','status':'pass','totalSpecs':65,'totalPasses':65,'totalFails':0,'totalSkips':3,'url':'http://www.jenkins.com'},{'id':12,'date':'2015-10-19T04:00:00.000Z','status':'fail','totalSpecs':68,'totalPasses':67,'totalFails':1,'totalSkips':10,'url':'http://www.jenkins.com'},{'id':13,'date':'2015-10-18T04:00:00.000Z','status':'pass','totalSpecs':35,'totalPasses':35,'totalFails':0,'totalSkips':8,'url':'http://www.jenkins.com'}]}];

    // load the service's module
    beforeEach(module('tower'));

    // instantiate service
    beforeEach(inject(function (_columnTotals_) {
      columnTotals = _columnTotals_;
    }));

    it('should have a get() method for retrieving mock data.', function () {
      expect(columnTotals.calculateTotals).toBeDefined();
    });

    it('should return summary data for each date', function () {
      var totals = columnTotals.calculateTotals(mockData);
      expect(totals['2015-10-31T04:00:00.000Z'].totalSpecs).toBe(79);
      expect(totals['2015-10-31T04:00:00.000Z'].totalPasses).toBe(77);
      expect(totals['2015-10-31T04:00:00.000Z'].totalFails).toBe(2);
      expect(totals['2015-10-31T04:00:00.000Z'].runs).toBe(2);
      expect(totals['2015-10-31T04:00:00.000Z'].buildFails).toBe(2);
    });

  });
})();
