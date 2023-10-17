import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/products' Component={Products} />
        <Route path='/sign-up' Component={SignUp} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
