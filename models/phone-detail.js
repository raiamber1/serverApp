var mongoose = require('mongoose');

// Define our user schema
var PhoneDetailSchema   = new mongoose.Schema({

        "additionalFeatures": String, 
        "android": {
        "os": String, 
        "ui": String
    }, 
    "availability": [String], 
    "battery": {
        "standbyTime": String, 
        "talkTime": String, 
        "type": String
    }, 
    "camera": {
        "features": [String], 
        "primary": String
    }, 
    "connectivity": {
        "bluetooth": String, 
        "cell": String, 
        "gps": Boolean, 
        "infrared": Boolean, 
        "wifi": String
    }, 
    "description": String, 
    "display": {
        "screenResolution": String, 
        "screenSize": String, 
        "touchScreen": Boolean
    }, 
    "hardware": {
        "accelerometer": Boolean, 
        "audioJack": String, 
        "cpu": String, 
        "fmRadio": Boolean, 
        "physicalKeyboard": Boolean, 
        "usb": String
    }, 
    "id": String, 
    "images": [String], 
    "name": String, 
    "sizeAndWeight": {
        "dimensions": [String], 
        "weight": String
    }, 
    "storage": {
        "flash": String, 
        "ram": String
    }
   
});
// Export the Mongoose model
module.exports = mongoose.model('PhoneDetail', PhoneDetailSchema);
