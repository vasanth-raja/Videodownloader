import React from 'react'
import NavBar from '../component/NavBar'
import LandingPage from '../Pages/LandingPage'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import Foot from '../component/Foot'
import NativeShare from '../component/NativeShare'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <NativeShare/>
        <LandingPage/>
        <Foot/>
        <Footer/>
        <ToastContainer position="top-center"/>
    </div>
  )
}

export default Layout