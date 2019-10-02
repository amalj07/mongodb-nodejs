const mongoose = require('mongoose');

var schema = mongoose.Schema;

//Creating a new schema
var schemaName = new schema({

    name : String
    username : String
    email : String
    
});

//Creating an object of schema
var model = mongoose.model('modelName', schemaName);

module.exports = model;
