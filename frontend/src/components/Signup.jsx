import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import avtar from "../assets/avtar.jpg";
import { useState } from 'react';

function Signup() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const[email,setemail]=useState('');
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const login=async () =>{
    setLoading(true);
    const url="http://localhost:9000/User/signup";
    try{
      const response=await fetch(url,{
        method:"POST",
        body: JSON.stringify({ username, password,email }),
        headers: { "Content-Type": "application/json" },
      });
      if(!response.ok){
        console.log("error");
      }
      const data= await response.json();
      localStorage.setItem("token",data.token);
      window.location='/';}
    catch(error){
     setError("Sign up failed please fill the correct information");
     console.log(error);
    }
    finally{
      setLoading(false);
    }

  }
  return (
    <div className="my-10 mx-80 bg-blue-500/10 backdrop-blur-lg h-[550px] w-[900px] rounded-lg shadow-lg">
      <center>
<div>
          <Avatar
            alt="User"
            src={avtar}  
            sx={{ width: 100, height: 100, mt: 10 }}
          />
          <div className="bg-white/50 backdrop-blur-md h-[400px] w-[600px] mt-7 rounded-3xl shadow-lg"> 
            <div className="w-[500px] pt-10">
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                type="text"
                sx={{ mt: 2, boxShadow: 3 }}  
                value={username}
                onChange={(e)=>{
                  setUsername(e.target.value);
                }}
              />
              <TextField
                label="EMAIL"
                variant="outlined"
                fullWidth
                type="email"
                sx={{ mt: 2, boxShadow: 3 }}
                value={email}
                onChange={(e)=>{
                  setemail(e.target.value);
                }}
               
              />
               <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mt: 2, boxShadow: 3 }}
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
              />
              <Button variant="contained"
               fullWidth={true} 
              sx={{ mt: 2, boxShadow: 3 }}
              onClick={login}
              disabled={loading}>
                               {loading ? "Logging in..." : "LOGIN"}

              </Button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Signup;