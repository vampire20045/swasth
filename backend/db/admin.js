const mongoose =require('mongoose');
const userSchema=new mongoose.Schema({
    username:String,
    Password:String
});
const AdminSchema=new mongoose.Schema({
    username:String,
    Password:String
});
const user=new mongoose.Schema("user",userSchema);
const admin=new mongoose.Schema("admin",AdminSchema);
module.export={
    user,
    admin
}