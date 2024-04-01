const mongoose =require('mongoose')

const urlSchema =new mongoose.Schema({
    shortId:{
     type:String,
     required:true,
     unique:true
    },
    homeurl:{
        type:String,
        required:true
    },
    noOfClicks:[ {
        type: Date,
        default: Date.now
    }]

},{timestamps:true})
module.exports= mongoose.model('URL',urlSchema)
