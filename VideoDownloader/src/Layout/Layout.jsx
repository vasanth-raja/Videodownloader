import React from 'react'
import NavBar from '../component/NavBar'
import LandingPage from '../Pages/LandingPage'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <LandingPage/>
    </div>
  )
}

export default Layout