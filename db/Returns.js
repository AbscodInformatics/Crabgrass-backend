const mongoose = require('mongoose');
const returnSchema=mongoose.Schema({
    biller:String,
    customer_name:String,
    date:String,
    payment_status:String,
    reference_no:String,
    total:Number,
    

});
module.exports=mongoose.model('returns',returnSchema);