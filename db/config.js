const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://abscod:656Erl14ZlApi95b@cluster0.7tsoi9r.mongodb.net/pos-panel',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('db connection done'))

