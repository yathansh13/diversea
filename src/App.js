import Land from './Views/Land'
import Login from './Views/Login'
import Register from './Views/Register';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Land />}/>  
        <Route path="login" element={<Login />} />
        <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;