import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Registeration";

function App() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "black"
    }}>
      <Router>
        <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

