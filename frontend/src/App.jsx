import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Land from './components/Land'

function App() {
  
  return (
   
    
<Router>
 < div style={{width: "100vw",
                height: "1000px",
               }}
            >
  <Routes>
    <Route path={"/Signup"} element={<Signup />} />
    <Route path={"/Login"} element={<Login/>}/>
    <Route path={"/Land"} element={<Land/>}/>
  </Routes>
  </div>
</Router>
     
  )}

export default App
