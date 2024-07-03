import React, { useState } from 'react'
import '../Styles/NavBar.css'
import { Link, useNavigate} from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate();
  const [isActive, setActive] = useState(false);
  const menu=()=>{
    setActive(!isActive);
  }
  return (
    <>
    
    <div className='nav'>
        <h2 className='menus'>Download videos from Social media</h2>
        <button onClick={menu} className='ham menu'><img src="/assets/Ham.png" width='30' height='30' className='menus'/></button>
        <select  className='select menus' onChange={(e)=>{navigate(e.target.value)}}>
            <option value="linkedIndownload">LinkedIn</option>
            <option value="youtubedownload">Youtube</option>
            <option value="facebookdownload">FaceBook</option>
        </select>
    </div>
    <div className={isActive?'links':'hidelinks'}>
      <Link className='val' to={"/linkedIndownload"}> <h1>LinkedIn</h1></Link>
      <Link className='val' to={"/youtubedownload"}> <h1> Youtube </h1></Link>
      <Link className='val' to={"/facebookdownload"}> <h1>FaceBook </h1></Link>
    </div>
    </>
  )
}

export default NavBar