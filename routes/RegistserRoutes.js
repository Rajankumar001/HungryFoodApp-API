const express=require('express');
const RegisterModel=require('../models/RegisterSchema');
const routes=express.Router();

routes.post('/Register',async(req,res)=>{
  try{
        const {name,email,password,address}=req.body;
        const register=new RegisterModel({
            name,
            email,
            password,
            address
        })
        const data= await register.save();
        res.status(201).send({
            success:true,
            message:"user registeration succesful..."
        })
  }
  catch(err){
    console.log('error caught....',err)
  }
})
routes.post('/Login',async(req,res)=>{
  try{
        const {email,password}=req.body;
        const user=await RegisterModel.find({email,password})
        if(user.length>0){
        const  currentUser={
            name:user[0].name,
            email:user[0].email,
            isAdmin:user[0].isAdmin,
            _id:user[0]._id,
            address:user[0].address,
          }
          res.status(200).send({
            success:true,
            message:"login successfully",
            currentUser,
          })
        }
       
         
  }
  catch(err){
    console.log('error caught....',err)
  }
})


module.exports=routes;