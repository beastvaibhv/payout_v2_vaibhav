import React from 'react';
import { pages } from '../utils/constants';
import NavbarButton from './NavbarButton';
import Logo from '../utils/assets/images/Imagelogo_nishyan.png';
import Arrow from '../utils/assets/icons/arrowdown.svg';
import Wallet from "../utils/assets/icons/walletwallet.svg";

const NavbarContainer = () => {
  return (
    <div className='navbar'>
      <div className='nav-top'>
        <div className='company'>
          <div className='logo'>
            <img src={Logo} alt="nishyan_logo" />
          </div>
          <div className='name'>
            <div className="company-name">Nishyan</div>
            <div><u>Visit store</u></div>
          </div>
          <div className='arrow'>
            <img src={Arrow} alt="arrow-down" />
          </div>
        </div>
        <div className='pages'>
          {pages.map((item) => (<NavbarButton text={item.text} key={item.text} icon={item.link} />))}
        </div>
      </div>
      <div className='nav-bottom'>
        
          <div className='logo'>
            <img src={Wallet} alt="wallet_logo" />
          </div>
          <div className='wallet'>
            <div>Available Credits</div>
            <div className='credit'>222.10</div>
          </div>
        

      </div>

    </div>
  )
}

export default NavbarContainer;
