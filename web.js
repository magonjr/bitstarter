var express = require('express');
var app = express.createServer(express.logger());
var fs= require("fs");

var file = fs.readFileSync("index.html");
var buffer = new Buffer(file.length);

buffer.write(file.toString()); 

app.get('/', function(request, response) {
	response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
