import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Entry from "./components/Entry"
import Exit from "./components/Exit"
import Signin from "./components/Signin"


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Header/><Entry/></>} />
          <Route path="/entry" element={<><Header/><Entry/></>}/>
          <Route path="/exit" element={<><Header/><Exit/></>}/>
          <Route path="/signin" element={<><Header/><Signin/></>}/>
        </Routes>
    </Router>
  );
}

export default App; 
