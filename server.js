//Back End//

var http = require("http");
var express = require("express");
var path = require("path");


//Set up express App//

var app = express();
var PORT = 3000;

var tables = []

var waitingList = []
b

function handleRequest(request, response){
    response.end("User hit PORT url.")
}

var server = http.createServer(handleRequest); 

server.listen(PORT,function(){
    console.log("Server listening on: http://localhost:" + PORT);
});

//routes

app.get("/", function(err, res){
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(err,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(err, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});
