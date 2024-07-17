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
        <h2 className='menus title'><img src='/vite.svg' height={40} width={40}/><div style={{marginLeft:"0.5vw"}}>SocialBox</div></h2>
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
            <li><Link className='val' to={"/alldownload"}> All Sites</Link></li>
          </ul>
        </div>
    </div>
    <div className={isActive?'links':'hidelinks'}>
      <Link className='val' to={"/linkedIndownload"}> <h3>LinkedIn</h3></Link>
      <Link className='val' to={"/youtubedownload"}> <h3> Youtube </h3></Link>
      <Link className='val' to={"/facebookdownload"}> <h3>FaceBook </h3></Link>
      <Link className='val' to={"/instagramdownload"}> <h3>Instagram</h3></Link>
      <Link className='val' to={"/alldownload"}><h3> All Sites</h3></Link>
    </div>
    </>
  )
}

export default NavBar