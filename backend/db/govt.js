import mongoose, { mongo } from 'mongoose';

const LoginSchema=new mongoose.Schema({
username: { type: String, required: true, unique: true },
password: { type: String, required: true },})
const GovtLogin=mongoose.model("GovtLogin",LoginSchema);
export {GovtLogin}