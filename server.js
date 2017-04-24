
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js")["friendData"]

var app = express();
var PORT = 3000;


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

// gabs data from front end 

app.post("/api/friends", function(req, res) {
console.log("hello req", req.body)

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});