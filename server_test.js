var server = require('./server.js');
var http = require('http');
var common = require("./common");
var assert = common.assert;

var Server_Test = function() {

      var test = function(){
			//server test goes here
			describe("Http Server Test",function(){
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
		};

		return {
			test : test
		}
}


module.exports = Server_Test();