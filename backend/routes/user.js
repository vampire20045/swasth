const mongoose = require("mongoose");
const express = require('express');
const { User, Admin } = require("../db");
const jwt = require('jsonwebtoken');
const { SECRET } = require("../middleware/auth")
const { authenticateJwt } = require("../middleware/auth");
const route=express.Router();
Router.post("/signup",async(req,res)=>{
    const{username,password}=req.body;
    const x=  await Admin.findOne({username});
    if(x){
        console.log("user already exists");
        res.json({
            message:"user ALREADY exits"
        })}
        else{
            const obj={username:username,password:password};
            const y=new Admin();
            y.save();
            const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '24h' });
        res.json({ message: 'Admin created successfully', token });
    }});
Router.post("/Login",async(req,res)=>{
    const {username,password}=req.body;
    const x=await Admin.findOne({username,password});
    if(x){
        console.log("admin is logged ");
        const token =jwt.sign({username,role:'admin'},SECRET,{expiresIn:'24h'});
        res.json({message:"Admin logged successfully"})

    }
    else{
        console.log("users not found");
        res.json({message:"creditianls are wrong"})}})
