import express from 'express';
import jwt from 'jsonwebtoken'; // Make sure to import jwt
import { User, Family,Login } from '../db/User.js';
import { secret } from '../middleware/auth.js'; // Ensure secret is properly imported

const router = express.Router();

// Signup Route
router.post("/Signup", async (req, res) => {
    const { username, password, email} = req.body;

    try {
        // Check if user exists
        const existingUser = await Login.findOne({ username });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user object
        const newUser = new Login({
            username,
            password,
            email
          
            
        });

        // Save the user
        await newUser.save();

        // Create token
        const token = jwt.sign({ username, role: 'user' }, secret, { expiresIn: '24h' });
        res.status(201).json({ message: "User signed up successfully", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});

// Login Route
router.post("/Login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user with matching username and password
        const user = await Login.findOne({ username, password });
        if (user) {
            console.log("User logged in");

            // Create token
            const token = jwt.sign({ username, role: 'user' }, secret, { expiresIn: '24h' });
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
