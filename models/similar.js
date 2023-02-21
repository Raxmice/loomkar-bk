const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    similar:{
        type: String,
        required: true
    },
    product:{
        type: Array
    }
})

module.exports = mongoose.model('similar', ProductSchema); //in this line item will create as items