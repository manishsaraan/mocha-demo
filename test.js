var assert = require('assert');
var calc = require('./calc.js');
var server = require('./server.js');
var http = require('http');
var otp = require('./otp.js');


//test otp for six digits
describe("OPT test for 6 digits",function(){
   it("should return otp of 6 digits",function(done){
   	  var otp_to_test = String(otp.generateOTP());
   	  assert.equal(otp_to_test.length,6);
   	  done();
   })
  
});

//server test goes here
describe("Http Server Teset",function(){
      //starting server
	  before(function() {
			server.listen(8989);
	  });

	  //closing server
	  after(function() {
			server.close();
		});
	  describe("/",function(){
	 			  it("should be 'Hello Server'",function(done){
				  	    http.get('http://localhost:8989',function(response){
				  	    	assert.equal(response.statusCode,200);
				  	    	var body = "";
				  	    	response.on('data',function(d){
				  	    		 body += d;
				  	    	});
				  	    	response.on("end",function(){
				  	    		 assert.equal(body,"Hello Server");
				  	    		 done();
				  	    	})
				  	    })
				  });
	  });
});

//calculator test goes here
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
