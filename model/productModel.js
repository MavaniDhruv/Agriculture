const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    p_name:{
        type:String
    },
    p_price:{
        type:Number
    },
    p_rating:{
        type:String
    }
})

module.exports = mongoose.model('product',productSchema)