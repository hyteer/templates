var express = require('express');
var app = express();

app.use(express.static(__dirname+'/web'));


app.listen(80,function(){
	console.log('Server running on 80.');
});