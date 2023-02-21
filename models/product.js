const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    product_name:{
        type: String,
        required: true
    },
    product_url:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    vendor:{
        type: String
    },
    product_type:{
        type: String,
        required: true
    },
    cloth_type:{
        type: String,
        required: true
    },
    main_price:{
        type: Number,
        required: true
    },
    discount:{
        type: Number
    },
    avail:{
        type: String,
        required: true
    },
    tag:{
        type: String
    },
    imgs:{
      type: Object
    },
    quantity:{
        type: Number
    },
    trending:{
        type: String
    },
    category:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', ProductSchema); //in this line item will create as items