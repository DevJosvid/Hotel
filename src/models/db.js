const mongoose = require('mongoose')
const {Schema} = mongoose;

const Hotel =  new Schema ({
    id: {type:Number,required:true},
    name: {type:String,required:true},
    stars:{type:Number,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    amenities:{type:Array,required:true} 
})

module.exports = mongoose.model('hotels',Hotel)