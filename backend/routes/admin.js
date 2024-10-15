import express from 'express';
import jwt from 'jsonwebtoken'; 
import { NgoLogin,Vedio } from '../db/Ngo.js';
import { secret } from '../middleware/auth.js'; 
const router = express.Router();

router.post("/Signup", async (req, res) => {
    const { username, password} = req.body;

    try {
        const existingUser = await NgoLogin.findOne({ username });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new NgoLogin({
            username,
            password
          
            
        });

        await newUser.save();

        
        const token = jwt.sign({ username, role: 'Ngo' }, secret, { expiresIn: '24h' });
        res.status(201).json({ message: "User signed up successfully", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.post("/Login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await NgoLogin.findOne({ username, password });
        if (user) {
            console.log("User logged in");

            const token = jwt.sign({ username, role: 'Ngo' }, secret, { expiresIn: '24h' });
            res.json({ message: "User logged in successfully", token });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log("There was an error", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
