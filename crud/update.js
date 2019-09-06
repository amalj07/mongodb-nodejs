var model = require('./models/schema');
var myModel = require('./models/model');


//updating one record
model.findByOneAndUpdate({attribute:'old value'}, {attribute:'new value'}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});