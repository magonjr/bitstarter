var express = require('express');
var app = express.createServer(express.logger());
var fs= require("fs");



app.get('/', function(request, response) {
	var file = fs.readFileSync("index.html");
	var buffer = new Buffer(file.length);
	buffer.write(file.toString()); 
	response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
