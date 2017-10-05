var OTP = function(){
	   var generateOTP = function(){
	   	    return  Math.floor(100000 + Math.random() * 900000);
	   }

	   return {
	    	generateOTP : generateOTP
	   }
}

module.exports = OTP();