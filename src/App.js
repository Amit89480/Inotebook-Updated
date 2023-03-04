import './App.css';
import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/NavBar';
import { Home } from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    },3000);
  }
  

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={ alert} />
          <div className="container">
          <Routes>
         <Route exact path="/" element={<Home showAlert={showAlert} />} />
         <Route exact path="/about" element={<About  />} />
         <Route exact path="/Login" element={<Login showAlert={showAlert}/>} />
         <Route exact path="/Signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
