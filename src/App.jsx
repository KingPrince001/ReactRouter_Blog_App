import {BrowserRouter, Routes, Route } from 'react-router-dom'  

import About from './Pages/About'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Java from './Pages/Java'
import Javascript from './Pages/Javascript'
import Python from './Pages/Python'
import CPlusPlus from './Pages/CPlusplus' 
import './App.css'

function App() {
  

  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/java" element={<Java />} />
      <Route path="/python" element={<Python />} />
      <Route path="/cplusplus" element={<CPlusPlus />} />
    </Routes>
    </BrowserRouter>
</>
  );
   
  
}

export default App
