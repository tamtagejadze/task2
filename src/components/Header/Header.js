import React from 'react';
import './header.css';
import { useContext } from "react";
import ChangeLanguage from './Changelanguage';


// function changeToGeorgian() {

// }
function Header() {
  const selectedLanguage = useContext(ChangeLanguage); 
  return (
    <nav>
      <div className='left'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Friend List</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </div>  
      <div className='right'>
        <button >GEO</button>
        <button >ENG</button>          
      </div> 
    </nav>
  )
}

export default Header;