var express = require("express");
var app = express();

app.use(express.static('server'));

app.get("/", function(req, res){
	//res.send("Fuck York!");
	res.sendFile(__dirname+"/index.html");

});

app.listen(8080, function(){
	console.log("Listened on 8080.");
});

