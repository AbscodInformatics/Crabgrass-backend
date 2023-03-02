const mongoose=require('mongoose');

const salesManSchema=mongoose.Schema({
    company:String,
    name:String,
    contact:String,
    email:String,
    date:Object,
    address:String
})
module.exports=mongoose.model('salesman',salesManSchema);