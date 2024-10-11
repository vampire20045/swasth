import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './routes/User.js'
import Ngo from './routes/admin.js'
import Govt from './routes/Govt.js'

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/disaster");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
};

const app = express();
app.use(cors());
app.use(express.json());
app.use("/User", User);
app.use("/Ngo",Ngo);
app.use("/Govt",Govt);

app.listen(9000, () => {
    console.log("Server is ready on port 9000");
    connect();
});
