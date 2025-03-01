import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import TranslatorPage from './pages/TranslatorPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
      </Routes>
    </Router>
  )
}

export default App
