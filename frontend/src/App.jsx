import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Appbar />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
                   <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

