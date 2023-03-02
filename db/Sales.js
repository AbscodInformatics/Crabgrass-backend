const mongoose=require('mongoose');

const salesSchema=mongoose.Schema({
    date:String,
    biller_name:String,
    customer_name:String,
    price:Number,
    quantity:Number,
    product:String,
});
module.exports=mongoose.model('sales',salesSchema);