const mongoose=require('mongoose');
const express=require('express');
const orderSchema=mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
    
    },
    userid:{
        type:String,
    },
    orderItem:[],
    shippingAddress:{
        type:Object
    },
    orderAmount:{
        type:String,
    },
    isDelivered:{
   type:String,
   default:false,
    }
});
module.exports=mongoose.model('order',orderSchema);