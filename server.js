//Back End//

var http = require("http");
var express = require("express");
var path = require("path");


//Set up express App//

var app = express();
var PORT = 3000;


function handleRequest(request, response){
    response.end("User hit PORT url.")
}

var server = http.createServer(handleRequest); 

server.listen(PORT,function(){
    console.log("Server listening on: http://localhost:" + PORT);
});