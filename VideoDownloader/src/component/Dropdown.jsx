import React from 'react'
const Dropdown = ({dropdowndata,isActive,onToggle}) => {
   
    
  return (
    
        <li>
            
          <button onClick={onToggle}>{dropdowndata.title} <img src={isActive?"assets/minus.svg":dropdowndata.icon} height={10} width={10}/></button>
          <p className={isActive?"panel":"hidePanel"}>{dropdowndata.description}</p>
        </li>
  )
}

export default Dropdown