import { useState } from 'react'
import React from 'react';
import Spline from './components/spline';
import Navbar from './components/Navbar'
import Presentation from './components/Presentation';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Spline />
      <Routes>
        <Route path="/" element={<Presentation />} />
      </Routes>

    </>
  )
}

export default App
