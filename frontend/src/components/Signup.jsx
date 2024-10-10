import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import avtar from "../assets/avtar.jpg";

function Signup() {
  return (
    <div className="my-10 mx-80 bg-blue-500/10 backdrop-blur-lg h-[550px] w-[900px] rounded-lg shadow-lg">
      <center>
<div>
          <Avatar
            alt="User"
            src={avtar}  
            sx={{ width: 100, height: 100, mt: 10 }}
          />
          <div className="bg-white/50 backdrop-blur-md h-[400px] w-[600px] mt-7 rounded-3xl shadow-lg">  {/* Applied shadow-lg */}
            <div className="w-[500px] pt-10">
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                type="text"
                sx={{ mt: 2, boxShadow: 3 }}  
              />
              <TextField
                label="EMAIL"
                variant="outlined"
                fullWidth
                type="email"
                sx={{ mt: 2, boxShadow: 3 }}
                onClick={
                    (e)=>{
                        console.log(e);
                    }
                }  
              />
               <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mt: 2, boxShadow: 3 }}  
              />
              <Button variant="contained" fullWidth={true} sx={{ mt: 2, boxShadow: 3 }}>
                Signup
              </Button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Signup;