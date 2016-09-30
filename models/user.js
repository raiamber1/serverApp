var mongoose = require('mongoose');


// Define our user schema
var UserSchema   = new mongoose.Schema({
  name: String,
  password: String,
  profession: String,
  id: Number
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
