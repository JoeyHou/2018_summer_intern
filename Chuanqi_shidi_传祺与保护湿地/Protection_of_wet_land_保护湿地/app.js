var express = require("express");
var app = express();

app.use(express.static('server'));

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");

});

app.listen(80, function(){
	console.log("Listened on 80.");
});

