
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connection=require('./config/connection');
const Food=require('./models/FoodSchema');
const data=require('./data/Sweets_data.js');
  
const importData=async()=>{
    try{
        await Food.deleteMany();
        const sampledata=data.map((sweet)=>{
            return {...sweet}
        }) 
        await Food.insertMany(sampledata);
        console.log("data has imported successfully....");
    }catch(err){
        console.log("error caught ....",err)
    }
}
module.exports=importData();


