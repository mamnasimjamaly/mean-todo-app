var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.all("/*" , function(req, res) {
	res.send('\
		<html>\
		<head>\
			<title></title>\
		</head>\
		<body>\
			<h1>Hello, this is the app</h1>\
		</body>\
		</html>\
		');
});

app.listen(PORT, function() {
	console.log("Server Running on "  + PORT);
});