const mongoose=require('mongoose');
const FoodSchema =mongoose.Schema({
 name:{
    type:String,
 },
 variants:[],
 prices:[],
 category:{
   type:String,
 },
 description:{
    typr:String,
   
 },
 image:{
    type:String,
 }
})
module.exports=mongoose.model('food',FoodSchema);