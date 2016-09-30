"use strict";

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.29.81.130:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log( "connected" );
});

var Userx = require('./models/user');
  var usery = new Userx();

  // Set the beer properties that came from the POST data
  //user.name = req.body.name;
  //user.id = req.body.id;
  //user.profession = req.body.profession;

  usery.name = "Manish";
  usery.id = "2";
  usery.profession = "engineer";

  usery.save(function(err) {
    console.log("saving")
    if (err)
      console.log("error occured "+err);
console.log( "user saved" );
  });

Userx.find(function (err, usersy) {
  if (err) return console.error(err);
  console.log(usersy);
})







var fs = require("fs");
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log("try /listUsers");
});
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

var user = {
"user4" : {
"name" : "mohit",
"password" : "password4",
"profession" : "teacher",
"id": 4
}};

app.get('/addUser', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   	data = JSON.parse( data );
data["user4"] = user.user4;
       console.log( data );
       res.end( JSON.stringify(data));
   });
});
var id =2;
app.get('/deleteUser', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   	data = JSON.parse( data );
	delete data["user" + id];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
