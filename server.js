var http = require('http');

//creating a simple server.
var server = http.createServer(function(req,res){
  res.writeHead(200);
  res.end("Hello Server");
});

//listen server on the given port
exports.listen = function(port){
	  console.log('Listening on '+port);
	  server.listen(port);
};


//close and destroy server.
exports.close = function(){
	server.close();
}