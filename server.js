//Back End//

var http = require("http");
var express = require("express");
var path = require("path");


//Set up express App//

var app = express();
var PORT = 3005;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitingList = [];


// function handleRequest(request, response){
//     response.end("User hit PORT url.")
// }

// var server = http.createServer(handleRequest); 

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

// Displays all reservations
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  // Displays all waitlist results
app.get("/api/waitlist", function(req, res) {
    return res.json(waitinglist);
  });

  // Create New Reservations - takes in JSON input
  app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(newTable);
  });

  app.post("/api/waitinglist", function(req, res){
      var newWaitList = req.body;

      console.log(newWaitList);
      waitingList.push(newWaitList);
      res.json(newWaitlist);
  })


