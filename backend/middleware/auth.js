const jwt=require("jsonwebtoken")
const secret="aryan";
const auth=(req,res,next)=>{
    const auth=req.headers.authorization;
    if(auth){
        const aut=auth.split(" ")[1];
        jwt.verify(aut,secret,(error,data)=>{
if(error){
    console.log("error in the authentication");
    res.send({message:"error in the spliting "});
}
req.user=user;
next();})}
else{
    console.log("error in the token");
    res.send({message:"error in the token"});
}
}
module.export={
    auth,
    secret 
}