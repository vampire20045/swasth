import mongoose from 'mongoose';

const LoginSchema=new mongoose.Schema({
username: { type: String, required: true, unique: true },
password: { type: String, required: true },
email: { type: String, required: true, unique: true },


})
const UserSchema = new mongoose.Schema({
     login: { type: mongoose.Schema.Types.ObjectId, ref: 'Login' }, // Referring to the login document
    name: { type: String, required: true },
    age: { type: Number, required: true },
    adharCard: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    mobile: { type: Number, required: true, unique: true },
    Total_member: { type: Number, required: true },
    address: { type: String, required: true },
    family: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Family' }]
}, {
    timestamps: true 
});

const FamilySchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    adharCard: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    Country: { type: String, required: true },
    pincode: { type: Number, required: true },
    mobile: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
});


const User = mongoose.model('User', UserSchema);
const Family = mongoose.model('Family', FamilySchema);
const Login=mongoose.model('Login',LoginSchema);

export { User, Family,Login };
