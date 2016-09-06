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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
