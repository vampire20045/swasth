const express =require('express');
const bodyParser =require('body-parser');
const mongoose =require('moongoose');
const cors= require('cors');
const app= express();
app.use(express.json());
app.use(cors());


app.listen(9000,(req,res)=>{
    console.log("server is running on port 9000");
})


