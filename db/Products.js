const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    date:String,
    product_name:String,
    product_category:String,
    sub_category:String,
    price:Number,
    tax_id:String,
    quantity :Number,
    size:String
});
module.exports=mongoose.model('products',productSchema);
