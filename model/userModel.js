const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    u_name:{
        type:String
    },
    u_email:{
        type:String
    },
    u_password:{
        type:String
    },
    u_contact:{
        type:Number
    }
})

module.exports = mongoose.model('user',userSchema)