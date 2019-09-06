var model = require('./models/schema');
var myModel = require('./models/model');



//reading from db
model.find().then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
});


//reading a single data
model.findOne({ attribute : 'value' }).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});