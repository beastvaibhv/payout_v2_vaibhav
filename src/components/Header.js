import React, { useState } from 'react';
import Help from '../utils/assets/icons/Vectorhelp.svg';
import Search from "../utils/assets/icons/Searchsearch.svg";
import Feedback from "../utils/assets/icons/Menufeedback.svg";
import Favorite from "../utils/assets/icons/Menupolygon.svg";

const Header = () => {
    const [text, setText] = useState("");
  return (
    <div className='header-container'>


    <div className='left-header'>
        <div className="text-500">Payments</div>
        <div className="help">
        <span ><img src={Help} alt="help" /></span>
        <span>How it works</span>
           
        </div>
    </div>
    <div className='search-container'>
          <div>
           <img src={Search} alt="search-icon"/>
          </div>
          <div><input 
            type='text'
            placeholder="Search Features, tutorials. etc.."
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          /></div>
    </div>
    <div className='right-header'>
        <span><img src={Feedback} alt="feedback" /></span>
        <span><img src={Favorite} alt="favourites" /></span>
    </div>
      
    </div>
  )
}

export default Header;
