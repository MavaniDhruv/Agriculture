var mongoose = require("mongoose");

var billSchema = new mongoose.Schema({
    total_amount:{
        type:String
    }
})

module.exports = mongoose.model("bill",billSchema)