import React from 'react';
import './header.css';
import { useContext } from "react";
import ChangeLanguage from './Changelanguage';


function Header() {
  const selectedLanguage = useContext(ChangeLanguage); 
  return (
    <nav>
      <div className='left'>
        <li>
          <a href="#" className={selectedLanguage.language}></a>
        </li>
        <li>
          <a href="#" className={selectedLanguage.language + 1}></a>
        </li>
        <li>
          <a href="#" className={selectedLanguage.language + 2}></a>
        </li>
      </div>  
      <div className='right'>
        <button onClick={() => selectedLanguage.setLanguage ('geo')}>GEO</button>
        <button onClick={() => selectedLanguage.setLanguage('eng')}>ENG</button>          
      </div> 
    </nav>
  )
}

export default Header;