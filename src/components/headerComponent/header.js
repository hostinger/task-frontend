import React from 'react';
import logo from './logo.png';

function Header() {
  return (
    
      <header className="hostinger__header  container">

       <div className="hostinger__logo">
       <img src={logo} alt="Logo" />
       </div>

       <nav className="hostinger__menu">
         <ul>
         <li className="hostinger__menu-i">
            <i className="material-icons" >menu</i>
          </li>
          <li>
            <a className="hostinger__menu-li" href="#" >New Hosting</a>
          </li>
          <li>
            <a className="hostinger__menu-li hostinger__menu-li--active"  href="#">Cloud Hosting
            <span className="on-sale ">AKCIJA</span></a>
          </li>
          <li>
            <a className="hostinger__menu-li"  href="#">VPS Hosting</a>
          </li>
          <li>
            <a className="hostinger__menu-li"  href="#">Domain Checker</a>
          </li>
          <li>
            <a className="hostinger__menu-li"  href="#">Website Builder</a>
          </li>
          </ul>
       </nav>
      
      </header>
    
  );
}

export default Header;
