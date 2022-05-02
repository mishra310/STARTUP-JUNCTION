const mongoose = require(".. /connections");
const schema = new mongoose.Schema({
    username : String ,
    name :String,
    email : String,
    contact : Number,
    description : String,
    brouchure : Image,
    logo :Image,
    originDate : Number,
    targetAmt : Number,
    reasons : String ,
    socialDetails : String,
    website : String,
    createdAt : { type : Date, default : new Date() },
})

const model = mongoose.model( "startupmodel" , schema) 
module.exports = model;