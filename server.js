var express = require('express');
var app = express();

app.get('/',function(req,res){
	console.log(req.url)
	res.redirect('/index.html');
})

app.use(express.static('.'));

app.listen(4000,function(){
	console.log('server is listing at',4000);
})