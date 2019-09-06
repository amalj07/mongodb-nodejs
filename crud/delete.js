var model = require('./models/schema');
var myModel = require('./models/model');


//deleting one record
model.findOneAndRemove({attribute : 'value'}).then(function(){
    console.log("deletion succesfull...");
}).catch(function(error){
    console.log(error);
});