"use strict";

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.29.81.130:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log( "connected" );
});

var Phone = require('./models/phone');
 // var usery = new Phones();

  // Set the beer properties that came from the POST data
  //user.name = req.body.name;
  //user.id = req.body.id;
  //user.profession = req.body.profession;


Phone.find({age:7},function (err, phoneslist) {
  if (err) return console.error("some error"+err);
  console.log("list from mongo "+phoneslist);
});


var fs = require("fs");
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
   console.log("try /listUsers");
});
app.get('/loadPhones', function (req, res) {
   fs.readFile( __dirname + "/" + "phones/phones.json", 'utf8', function (err, data) {
       console.log( data );
       var phonesArray = [];
       phonesArray = data
Phone.collection.insert(phonesArray, function(err,r) {
 if(err) {console.log("error"+err);}
console.log("inserted count "+r);

})
//       res.end( data );
   });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
