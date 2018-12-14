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

<<<<<<< HEAD
var customers = [
    {
        routeName:
        name:
        phoneNumber:
        email:
        uniqueID:
    },
    {
        routeName:
        name:
        phoneNumber:
        email:
        uniqueID:
    },
    {
        routeName:
        name:
        phoneNumber:
        email:
        uniqueID:
    },
    {
        routeName:
        name:
        phoneNumber:
        email:
        uniqueID:
    },
    {
        routeName:
        name:
        phoneNumber:
        email:
        uniqueID:
    },
]
=======
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
>>>>>>> ac44040a6d3990301393d78ced633f26115e6aca
