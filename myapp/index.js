const express = require('express')
const cors = require('cors')
const products=require('./products.json')
const catagory=require('./categories.json')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/catagory',(req,res)=>{
  res.send(catagory);
})
app.get('/data',(req,res)=>{
    res.send("My name is Tasnia Sharin");
})
app.get('/product',(req,res)=>{
    res.send(products);
})
app.get('/product/:id',(req,res)=>{
    const id=req.params.id;
    const idwidse=products.find(index=>index.id==id);
    res.send(idwidse);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})