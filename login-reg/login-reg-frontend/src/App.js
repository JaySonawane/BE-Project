import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;