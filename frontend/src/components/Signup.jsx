import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup(){
 return(
    <div>
    <center>
        <div style ={{
            border:"2px solid black",
            height:"600px",
            width:"600px"}}>
            <h1> Signup</h1>
        <TextField id="filled-basic" label="Username" variant="filled" />
        <br></br>
         <TextField id="filled-basic" label="Password" variant="filled" type="password" />
         <br></br>
            <Button variant="contained" style={{marginTop:"20px"}}>Signup</Button>


         


            
        </div>
        </center>
    </div>
 )
}
export default Signup;