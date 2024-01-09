import React from 'react'

const NavbarButton = ({icon, text}) => {
  return (
    <div className='navbar-btn'>
      <div className='navbar-btn-inner'>
        <div className='btn-icon'>
            <img src={icon} alt={icon} />
        </div>
        <div className='btn-text'>{text}</div>
      </div>
    </div>
  )
}

export default NavbarButton;
