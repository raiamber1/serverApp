var mongoose = require('mongoose');

// Define our user schema
var UserSchema   = new mongoose.Schema({
  name: String,
  password: { type: String, required: false },
  profession: String,
  id: Number,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
