const mongoose=require('mongoose');
const url=process.env.Mongo_URI;
mongoose.connect(url,{
 
 useunifiedTopology:true,
 useNewurlParser:true,
 
})
.then( function(){
    return console.log("connection successfull...")
}).catch(function(err){
    return console.log("error caught ... ",err)
})
module.exports=mongoose