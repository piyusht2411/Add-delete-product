const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_db');

const db = mongoose.connection;

db.on('error', function(err){ console.log(err.message);});
db.once('open', function(){
    console.log("succesfully connected to the database");
})
