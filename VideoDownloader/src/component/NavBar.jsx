import React from 'react'
import '../Styles/NavBar.css'
import { useNavigate} from 'react-router-dom'
const NavBar = () => {
  const navigate=useNavigate();
  return (
    <div className='nav'>
        <h2>Download videos from Social media</h2>
        <select className='select' onChange={(e)=>{navigate(e.target.value)}}>
            <option value="linkedIndownload">LinkedIn</option>
            <option value="youtubedownload">Youtube</option>
            <option value="facebookdownload">FaceBook</option>
        </select>
    </div>
  )
}

export default NavBar