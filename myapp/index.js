const express = require('express')
const cors = require('cors')
const products=require('./products.json')
const catagory=require('./categories.json')
const news=require('./news.json')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/catagory',(req,res)=>{
  res.send(catagory);
})
app.get('/news',(req,res)=>{
  res.send(news);
})
app.get('/news/:id',(req,res)=>{
  const id=req.params.id;
  const idwisenews=news.find(index=>index._id==id);
  res.send(idwisenews);
})

app.get('/catagory/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  if(id==0){
    res.send(news)

  }
  else{
    const catagoryidwisenews=news.filter(index=>index.category_id==id);
    res.send(catagoryidwisenews);
  }
 
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