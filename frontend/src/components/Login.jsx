import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import avtar from "../assets/avtar.jpg";

function Login() {
  return (
    <div className="my-10 mx-80 bg-blue-500/10 backdrop-blur-lg h-[550px] w-[900px] rounded-lg shadow-lg">
      <center>
<div>
          <Avatar
            alt="User"
            src={avtar}  
            sx={{ width: 150, height: 150, mt: 10 }}
          />
          <div className="bg-white/50 backdrop-blur-md h-[350px] w-[600px] mt-7 rounded-3xl shadow-lg">  {/* Applied shadow-lg */}
            <div className="w-[500px] pt-10">
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                type="text"
                sx={{ mt: 5, boxShadow: 3 }}  
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mt: 5, boxShadow: 3 }}  
              />
              <Button variant="contained" fullWidth sx={{ mt: 5, boxShadow: 3 }}>
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Login;

