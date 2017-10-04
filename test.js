var assert = require('assert');
var calc = require('./calc.js');

describe('Calculations Tests',function(){

     describe("Addtion Tests",function(){
		  //describe tests here..
		  it('returns 1 + 1 = 2',function(done){
		       assert.equal(calc.add(1,1),2);
		       //invoke done
		       done();
		  });

		  it("returns 1 + -1 = 0",function(done){
		  	assert.equal(calc.add(1,-1),0);
		  	//invoke done
		  	done();
		  });
      });

     describe("Multiplication Tests",function(){
		  //describe tests here..
		  it('returns 2 * 2 = 4',function(done){
		       assert.equal(calc.mul(2,2),4);
		       //invoke done
		       done();
		  });

		  it("returns 0 * 4 = 0",function(done){
		  	assert.equal(calc.mul(0,4),0);
		  	//invoke done
		  	done();
		  });
      });


});
