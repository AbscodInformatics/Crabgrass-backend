const mongoose = require('mongoose');
const returnSchema=mongoose.Schema({
   date:Object,
   product_name:String,
   customer_name:String,
   product_category:String,
   sub_category:String,
   price:String,
   quantity:String,
   size:String,





});
module.exports=mongoose.model('returns',returnSchema);