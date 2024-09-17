import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  
  return (
   
    
<Router>
 < div style={{width: "100vw",
                height: "1000px",
                backgroundColor: "#624E88"}}
            >
  <Routes>
    <Route path={"/Signup"} element={<Signup />} />
    <Route path={"/Login"} element={<Login/>}/>
  </Routes>
  </div>
</Router>
     
  )}

export default App
