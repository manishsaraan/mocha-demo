var common = require("./common");
function importTest(path) {
	var path =  require(path);
    path.test();
}
describe("top", function () {
    beforeEach(function () {
       //console.log("running something before each test");
    });
    importTest('./otp_test');  
    importTest('./chai_test'); 
     importTest('./server_test'); 
    after(function () {
      //  console.log("after all tests");
    });
});