const express=require('express');
const food =require('../models/FoodSchema');
const router=express.Router();

router.get('/getAllFood', async(req,res)=>{
    try{
    const result=await food.find({});
    res.status(201).send({
        sucess:true,
        message:"food data is recieving perfectly....",
        result
    })
    console.log(result);
    }catch(err){
        console.log("error caught..... ",err)
    }
})
router.post('/addFood', async(req,res)=>{
    try{
   const {foods}=req.body;
   const newFood=new food({
    name:foods.name,
    image:foods.image,
    variants:['small'||'half','medium','large'||'full'],
    description:foods.description,
    category:foods.category,
    prices:[foods.prices],
   })
   await newFood.save();
   res.status(201).send("new food added");
    }catch(err){
        console.log("error caught..... ",err)
    }
})
router.post('/editItem', async(req,res)=>{
    try{
   const {geteditbyId}=req.body;
  const Food=await food.findOne({_id:geteditbyId});
   res.status(201).send({
    success:true,
    message:"new food edited",
    Food
});
    }catch(err){
        console.log("error caught..... ",err)
    }
})
router.post('/updateItem', async(req,res)=>{
    try {
        const { updatebyId } = req.body;
        const oldfood = await food.findOne({_id:updatebyId._id});
    
        if (!oldfood) {
          return res.status(404).json({ message: 'Food item not found' });
        }
    
        oldfood.name = updatebyId.name;
        oldfood.image = updatebyId.image;
        oldfood.description = updatebyId.description;
        oldfood.category = updatebyId.category;
        oldfood.prices = [updatebyId.prices];
    
        await oldfood.save();
        res.status(201).send("Item updated successfully");
      } catch (err) {
        console.log("Error caught:", err);
        res.status(500).json({ message: 'Server error' });
      }
    
})
router.post('/deleteItem', async(req,res)=>{
    try {
        const { deletebyId } = req.body;
        const oldfood = await food.findOneAndDelete({_id:deletebyId._id});
        console.log(oldfood);
        res.status(201).send("Item deleted successfully");
      } catch (err) {
        console.log("Error caught:", err);
        res.status(500).json({ message: 'Server error' });
      }
    
})
module.exports=router;