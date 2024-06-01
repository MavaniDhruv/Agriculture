var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
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

module.exports = mongoose.model("cart",cartSchema)