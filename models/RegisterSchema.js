const mongoose=require('mongoose');
const RegisterSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        unique:true,
        
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        reuired:true,
    }

})
module.exports=mongoose.model('Register',RegisterSchema);