const express=require('express');
const morgan =require('morgan');
const dotenv=require('dotenv');
const routes=require('./routes/foodsRoutes');
const registerRoutes=require('./routes/RegistserRoutes');
const orderRoutes=require('./routes/OrderRoutes');
const cors=require('cors')
dotenv.config();
const connection=require('./config/connection');
const app=express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/food',routes);
app.use('/api/food/',registerRoutes);
app.use('/api/placingorder',orderRoutes)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// port and listening
const port=8080;
app.listen(port,(req,res)=>{
    console.log(`app is listening on ${port}...`)
})

// routing
app.get('/',(req,res)=>{
    res.send("hi i am root path");
})


