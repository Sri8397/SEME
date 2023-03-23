import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Entry from "./components/Entry"
import Exit from "./components/Exit"
import Home from "./components/Home"

function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/entry" element={<><Header/><Entry/></>}/>
          <Route path="/exit" element={<><Header/><Exit/></>}/>
        </Routes>
    </Router>
  );
}

export default App; 
