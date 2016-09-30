"use strict";

var fs = require("fs");
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var assert = require('assert');
var router = express.Router();

var url = 'mongodb://172.29.81.130:27017/test';

mongoose.connect('mongodb://172.29.81.130:27017/test');

var User = require('./models/user');
var bodyParser = require('body-parser');

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on users!' });
});

// -- New Code Below Here -- //

// Create a new route with the prefix /beers
var usersRoute = router.route('/users');

// Create endpoint /api/beers for POSTS
usersRoute.post(function(req, res) {
  // Create a new instance of the Beer model
  var user = new User();

  // Set the beer properties that came from the POST data
  //user.name = req.body.name;
  //user.id = req.body.id;
  //user.profession = req.body.profession;

  user.name = "Amber";
  user.id = "1";
  user.profession = "engineer";

  user.save(function(err) {
    console.log("saving")
    if (err)
      res.send(err);

    res.json({ message: 'User added to the DB!', data: user });
  });
});


// get all the users
user.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
