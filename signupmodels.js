const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    email:{
        type:String,
        reuired:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model('mytable',signUpTemplate)