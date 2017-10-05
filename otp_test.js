var common = require("./common");
var assert = common.assert;
var otp = require('./otp.js');

 var OtpTest =  function(){

		 	 var test = function(){
				for(var i = 0;i<1000;i++){
				//test otp for six digits
				describe("OPT test for 6 digits",function(){
				   it("should return otp of 6 digits",function(done){
				   	  var otp_to_test = String(otp.generateOTP());
				   	  assert.equal(otp_to_test.length,6);
				   	  done();
				   })
				  
				});
			   }
			}

			return {
				test : test
			}
		}
module.exports =  OtpTest();