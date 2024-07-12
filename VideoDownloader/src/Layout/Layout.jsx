import React from 'react'
import NavBar from '../component/NavBar'
import LandingPage from '../Pages/LandingPage'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import Features from '../Pages/Features'
import NativeShare from '../component/NativeShare'
const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <NativeShare/>
        <LandingPage/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Layout