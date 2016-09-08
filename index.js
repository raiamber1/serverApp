"use strict";

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
