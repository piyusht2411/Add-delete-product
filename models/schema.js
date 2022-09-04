const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
    product:{
        type: String,
        require:true
    }
})

const Api = mongoose.model('Api', ApiSchema);
module.exports = Api;