import React, { useState } from 'react'
import '../Styles/NavBar.css'
import { Link} from 'react-router-dom'

const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const menu=()=>{
    setActive(!isActive);
  }
  return (
    <>
    
    <div className='nav'>
        <h2 className='menus'>Download videos from Social media</h2>
        <button onClick={menu} className='ham menu'><img src="/assets/Ham.png" width='30' height='30' className='menus'/></button>
        <div className='navHide'>
          <ul className='navLinks' >
          <li><Link className='val' to={"/linkedIndownload"}> LinkedIn</Link></li>
          <li><Link className='val' to={"/youtubedownload"}>  Youtube </Link></li>
          <li><Link className='val' to={"/facebookdownload"}> FaceBook </Link></li>
          <li><Link className='val' to={"/instagramdownload"}> Instagram</Link></li>
          </ul>
        </div>
        <div className='navHide'>
          <ul className='navLogin'>
            <li><Link className='val' to={"/"}> Login</Link></li>
            <li><Link className='val' to={"/alldownload"}> SignUp</Link></li>
          </ul>
        </div>
    </div>
    <div className={isActive?'links':'hidelinks'}>
      <Link className='val' to={"/linkedIndownload"}> <h2>LinkedIn</h2></Link>
      <Link className='val' to={"/youtubedownload"}> <h2> Youtube </h2></Link>
      <Link className='val' to={"/facebookdownload"}> <h2>FaceBook </h2></Link>
      <Link className='val' to={"/instagramdownload"}> <h2>Instagram</h2></Link>
    </div>
    </>
  )
}

export default NavBar