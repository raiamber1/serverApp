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
});

Userx.update({name : {$eq: 'Amber'}}, {$set: {name: "Dude"}}, function(err, result){

    console.log("Updated successfully");

    console.log(result);
})

var fs = require("fs");
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));


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


var queryUsers = function(){

  
  Userx.find({name : {$eq: 'Amber'}}, function(err, result){

    if ( err ) throw err;

    console.log("Find Operations: " + result);

  });

}

var updateUser = function(){

 
  Userx.update({name : {$eq: 'Amber'}}, {$set: {name: "Dude"}}, function(err, result){

    console.log("Updated successfully");

    console.log(result);

  });

}

 

var deleteBook = function(){

  /*

    When callback is not passed, the action is not invoked on the collection

    until the exec() method is called.

    In this case I am not passing the callback and instead executing the action

    by invoking the exec() method.

  */

  Book.remove({name : {$eq: 'Amber'}}).exec();

}
