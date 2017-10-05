var OTP = function(){
	   var generateOTP = function(){
	   	    var otp =   Math.floor(100000 + Math.random() * 900000);	   	   
	   	    return otp;
	   }

	   return {
	    	generateOTP : generateOTP
	   }
}

module.exports = OTP();