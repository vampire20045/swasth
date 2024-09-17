const express =require('express');
const bodyParser =require('body-parser');
const mongoose =require('moongoose');
const cors= require('cors');
const app= express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://aryan98711:2004@cluster0.bb6ep.mongodb.net/disaster%20management?retryWrites=true&w=majority")
app.listen(9000,(req,res)=>{
    console.log("server is running on port 9000");
})


