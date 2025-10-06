import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import supabase from './config/supabaseClient'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import House from './pages/House'
import Lights from './pages/Lights'
import Switches from './pages/Switches'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="about" element={<About />} />
        <Route path="house" element={<House />} />
        <Route path="lights" element={<Lights />} />
        <Route path="switches" element={<Switches />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
