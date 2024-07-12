import React, { useState } from 'react'
const Dropdown = ({dropdowndata,index}) => {
    const [isActive,setisActive]=useState(false)
    
  return (
    
        <li key={index}>
            
          <button onClick={()=>setisActive(!isActive)}>{dropdowndata.title} <img src={isActive?"assets/minus.svg":dropdowndata.icon} height={10} width={10}/></button>
          <p className={isActive?"panel":"hidePanel"}>{dropdowndata.description}</p>
        </li>
  )
}

export default Dropdown