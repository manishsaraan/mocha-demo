var OTP = function(){
	   var generateOTP = function(){
	   	    return  Math.floor(Math.random() * 900000) + 10000;
	   }

	   return {
	    	generateOTP : generateOTP
	   }
}

module.exports = OTP();