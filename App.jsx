import React from 'react'
import {  Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Footer />
      <Routes>

      </Routes>
    </div>
  )
}

export default App
