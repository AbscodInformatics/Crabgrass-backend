const express=require('express');
require('./db/config');
const cors=require('cors')
const User=require('./db/User');
const Products=require('./db/Products');
const Sales=require('./db/Sales');
const Purchases=require('./db/Purchases');
const Returns=require('./db/Returns');
const SalesMan=require('./db/SalesMan')

const app=express();
app.use(cors())
app.use(express.json());

//Sign in API
app.post('/signin',async(req,resp)=>{
  if(req.body.email && req.body.password){
    let user=await User.findOne(req.body).select('-password');
    if(user){
        resp.send(user);
    }else{
        resp.send({result:"failed"})
    }
  }else{
    resp.send({result:'enter both field'})
  }
});

//Products API

app.post('/add-product',async(req,resp)=>{
    let product=new Products(req.body);
    let result=await product.save();
    resp.status(200).json(result);
});

app.get('/products',async(req,resp)=>{
    let result=await Products.find();
    resp.send(result);
})

app.delete('/product/:id',async(req,resp)=>{
    let result=await Products.deleteOne({_id:req.params.id})
    resp.status(200).json(result)
})

app.get('/product/:id',async(req,resp)=>{
    let result=await Products.findOne({_id:req.params.id})
    resp.status(200).json(result)
})

app.put('/product/:id',async(req,resp)=>{
    let result=await Products.updateOne(
        {_id:req.params.id},
        {
          $set:req.body
        }
    )
    resp.status(200).json(result)
})


//Sale API

app.post('/add-sale',async(req,resp)=>{
    let sales=new Sales(req.body);
    let result=await sales.save();
    resp.status(200).json(result);

})

app.get('/sale',async(req,resp)=>{
    let result = await Sales.find();
    resp.status(200).json(result);
    // resp.send(result)
})

app.delete('/sale/:id',async(req,resp)=>{
    let result=await Sales.deleteOne({_id:req.params.id})
    resp.status(200).json(result)
})

app.get('/sale/:id',async(req,resp)=>{
    let result=await Sales.findOne({_id:req.params.id})
    resp.status(200).json(result)
})

app.put('/sale/:id',async(req,resp)=>{
    let result =await Sales.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.status(200).json(result)
})
//Purchase API

app.post('/add-purchase',async(req,resp)=>{
    let purchase=new Purchases(req.body);
    let result=await purchase.save();
    resp.status(200).json(result)
})

app.get('/purchase',async(req,resp)=>{
    let result=await Purchases.find();
    resp.status(200).json(result);
})

//Returns API

app.post('/add-return',async(req,resp)=>{
    let returns = new Returns(req.body);
    let result =await returns.save();
    const endata={
        sucess:true,
        data:returns
    }
    resp.status(200).json(endata);
})

app.get('/return',async(req,resp)=>{
    let result=await Returns.find();
    resp.status(200).json(result) 
})

//Salesman API

app.post('/add-salesman',async(req,resp)=>{
  let salesMan=new SalesMan(req.body);
  let result=await salesMan.save();
  resp.status(200).json(result)
})

app.get('/salesman',async(req,resp)=>{
    let result=await SalesMan.find()
    resp.status(200).json(result)
})

app.delete('/salesman/:id',async(req,resp)=>{
    let result=await SalesMan.deleteOne({_id:req.params.id})
    resp.status(200).json(result)

})

//User API

app.post('/add-user',async(req,resp)=>{
    let user=new User(req.body);
    let result=user.save();
    resp.status(200).json(user);
})

app.get('/user',async(req,resp)=>{
    let result=await User.find().select('-password');
    resp.status(200).json(result)
})

app.delete('/user/:id',async(req,resp)=>{
    let result=await User.deleteOne({_id:req.params.id})
    resp.status(200).json(result)
})

app.listen(4000,()=>console.log("Run on port 4000"));