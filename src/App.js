import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar/Loadable';

import logo from './logo.svg';
import './App.css';


function App() {

  
  return (
    <BrowserRouter>
      <Navbar/>
  </BrowserRouter>
  );
}

export default App;
