
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js")

var app = express();
var PORT = 3000;

var userInput = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
res.json(friends)
});


//sends data back to the front end with matching logic
app.get("/results", function(req, res) {

totalDifference = 0;


if(userInput.length === 0){

  console.log("no user input")
}else{
  console.log("hey",userInput[0].scores)
   Object.keys(friends).forEach(function(index,value){
      totalDifference = 0;
   })

}

});

// grabs data from front end 
app.post("/api/friends", function(req, res) {
console.log("hello req", req.body)

userInput.push(req.body)
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
