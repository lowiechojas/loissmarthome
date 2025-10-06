import React from 'react'
import { NavLink, Link,Outlet, useLocation } from 'react-router-dom'
import About from './About'
import { useState } from 'react'
import supabase from '../config/supabaseClient'

const Dashboard = () => {

    const location = useLocation()
    const pageName = location.pathname.split('/')[1] || 'dashboard'
    const formattedPage = pageName.charAt(0).toUpperCase() + pageName.slice(1)

    const handleLogout = async () => {
  await supabase.auth.signOut()
  window.location.reload()
}

  return (
    <div className='dashboard-container'>
        <div className='dashboard-top'>
          <h1 className='text-deco'> <Link  to="/">Dashboard Page</Link></h1>
        </div>
        
        <div className='dashboard-main'>
            <div className='dashboard-header'>
                <div className='sidebar'>
                    <ul>
                        <li><Link className='sidebar-list text-deco' to={"/house"}>House</Link></li>
                        <li><Link className='sidebar-list text-deco' to={"/lights"}>Lights</Link></li>
                        <li><Link className='sidebar-list text-deco' to={"/switches"}>Switches</Link></li>
                    </ul>
                </div>
            </div>

            <div className='dashboard-content'>
                <h2>Welcome to the {formattedPage}</h2>
                <Outlet /> {/* 👈 This is where child pages render */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard