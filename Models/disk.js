const mongoose = require('mongoose');


const diskSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true}
});

const diskModel = mongoose.model('Disk',diskSchema);

module.exports = diskModel;
