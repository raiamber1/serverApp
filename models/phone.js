var mongoose = require('mongoose');

// Define our user schema
var PhoneSchema   = new mongoose.Schema({

<<<<<<< HEAD
        age: Number, 
        _id: String, 
        imageUrl: String, 
        name: String, 
        snippet: String
   
});
// Export the Mongoose model
module.exports = mongoose.model('Phone', PhoneSchema);
=======
	{
        "age": Number, 
        "id": String, 
        "imageUrl": String, 
        "name": String, 
        "snippet": String
    }


// Export the Mongoose model
module.exports = mongoose.model('User', PhoneSchema);
>>>>>>> 56c6bc6de8965c5195e53379a2f60401193d63a1
