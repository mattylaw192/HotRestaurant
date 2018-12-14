//Back End//

var http = require("http");
var express = require("express");
var path = require("path");


//Set up express App//

var app = express();
var PORT = 3005;

var tables = [];

var waitingList = [];


function handleRequest(request, response){
    response.end("User hit PORT url.")
}

var server = http.createServer(handleRequest); 

app.listen(PORT,function(){
    console.log("Server listening on: http://localhost:" + PORT);
});

//routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"));
});
