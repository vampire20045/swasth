import mongoose, { mongo } from 'mongoose';

const LoginSchema=new mongoose.Schema({
username: { type: String, required: true, unique: true },
password: { type: String, required: true },})
const NgoSchema=new mongoose.Schema({
    name:{type:String,required:true},
    url:{type:String,required:true},
    Uid:{type:String},
    dis:{type:String ,required:true}


})
const  videoSchema=new mongoose.Schema({
    url:{type:String},
    dis:{type:String},
    published:{type:Boolean},
    uid:{type:mongoose.Schema.Types.ObjectId,ref:"NgoLogin"},
    like:{type:Number}

})
const Vedio=mongoose.model("Vedio",videoSchema);
const NgoLogin=mongoose.model("NgoLogin",LoginSchema);
export {NgoLogin,Vedio}