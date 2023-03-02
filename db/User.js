const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:String,
    password:String,
    name:String,
     contact:Number,
     address:String,
});
module.exports=mongoose.model('users',userSchema);