import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link, BrowserRouter } from 'react-router-dom'; // Updated import
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Components/Header';


function App() {
  return (
    <BrowserRouter>
    
      <div>
      <Header />
      
     
      </div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
