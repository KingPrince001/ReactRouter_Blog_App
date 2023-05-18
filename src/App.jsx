import {BrowserRouter, Routes, Route } from 'react-router-dom'  

import About from './Pages/About'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import './App.css'

function App() {
  

  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
</>
  );
   
  
}

export default App
