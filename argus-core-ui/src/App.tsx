import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'  // New import
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <Router>
      <div className={isDark ? '' : 'light'}>
        <header className="header">
          <h1>Argus Core</h1>
          <label className="theme-toggle">
            <input type="checkbox" checked={isDark} onChange={toggleTheme} />
            <span className="slider">
              <span className="icon sun">☀️</span>
              <span className="icon moon">🌙</span>
            </span>
          </label>
        </header>
        <Routes>
          <Route path="/" element={<HomePage isDark={isDark} />} />
          <Route path="/login" element={<LoginPage isDark={isDark} />} />
          <Route path="/register" element={<RegisterPage isDark={isDark} />} />  {/* New route */}
        </Routes>
      </div>
    </Router>
  )
}

export default App