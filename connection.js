const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to MongoDB
mongoose.connect('mongodb://localhost/model');

//connect to db first
before(function(done){

    mongoose.connection.once('open', function(){
        console.log("Connection made to MongoDB....");
        done();
    }).on('error', function(error){
        console.log("Connection error: ", error);
    });
    
});



