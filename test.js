var assert = require('assert');
var calc = require('./calc.js');

describe('Calculations Test',function(){

  //describe tests here..
  it('returns 1 + 1 = 2',function(done){
       assert.equal(calc.add(1,1),2);
       //invoke done
       done();
  });

  it("returns 2*2 = 4",function(done){
  	assert.equal(calc(2,2),4);
  	//invoke done
  	done();
  })

});
