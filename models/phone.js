var mongoose = require('mongoose');

// Define our user schema
var PhoneSchema   = new mongoose.Schema({

	{
        "age": Number, 
        "id": String, 
        "imageUrl": String, 
        "name": String, 
        "snippet": String
    }


// Export the Mongoose model
module.exports = mongoose.model('User', PhoneSchema);
