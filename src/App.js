import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar/Loadable';
import Footer from './components/footer/Loadable';

import Login from './containers/Login/Loadable';
import Register from './containers/Register/Loadable';
import ManagerEnergy from './containers/ManagerEnergy/Loadable';
import EnergyDetail from './containers/EnergyDetail/Loadable';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/manager-energy' element={<ManagerEnergy />}/>
        <Route path='/energy-detail' element={<EnergyDetail />}/>
      </Routes>
      <Footer title="IOT" description="Chúng tôi rất hân hạnh được phát hành sản phẩm"/>
  </BrowserRouter>
  );
}

export default App;
