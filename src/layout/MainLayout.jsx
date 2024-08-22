import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../section/Navbar'

function mainLayout() {
  return (
    <div className="container">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default mainLayout