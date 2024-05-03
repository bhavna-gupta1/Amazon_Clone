import React, { useRef, useState } from 'react';

import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import About from './Component/About/About';
import Practise from './Component/practise/Practise';
import Navbar from './Component/Navbar/Navbar';




function App() {
  
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>

  
    </>
  );
}
export default App;


