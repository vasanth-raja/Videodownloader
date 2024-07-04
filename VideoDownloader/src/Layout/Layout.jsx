import React from 'react'
import NavBar from '../component/NavBar'
import LandingPage from '../Pages/LandingPage'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import Features from '../Pages/Features'
const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <LandingPage/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Layout