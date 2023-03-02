const mongoose = require('mongoose');
 
const purchaseSchema = mongoose.Schema({
    date:String,
    company:String,
    tax_id:String,
    product_name:String,
    product_category:String,
    sub_category:String,
    price:Number,
    tax_id:String,
    quantity:String,
    size:String,
    payment_status:String
});
module.exports=mongoose.model('purchases',purchaseSchema);