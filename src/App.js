import Land from './Views/Land'
import Login from './Views/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Land />}/>  
        <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;