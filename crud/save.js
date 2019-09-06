var model = require('./models/schema');
var myModel = require('./models/model');

//Saving data to db
myModel.save().then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(error);
    });