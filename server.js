var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
})

app.listen(4000,function(){
	console.log('server is listing at',4000);
})