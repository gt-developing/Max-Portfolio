import { useState } from 'react'
import React from 'react';
import Spline from './components/spline';
import Navbar from './components/Navbar'
import Presentation from './components/Presentation';

import './App.css'

function App() {

  return (
    <>
      <Navbar />
     <Spline />
     <Presentation />
    </>
  )
}

export default App
