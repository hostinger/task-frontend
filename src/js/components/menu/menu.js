import React, { Component } from 'react';
import OnSale from '../onsaleLabel/onsaleLabel.js'

class Menu extends Component {
    render () {
        return (
            <nav className="menu-container">
               <ul className="menu">
                   <li>
                       <a href="" className="menu-link">
                            Web Hosting
                       </a>
                   </li>
                   <li>
                       <OnSale />
                       <a href="" className="menu-link">
                           Cloud Hosting
                       </a>
                   </li>
                   <li>
                       <a href="" className="menu-link">
                           VPS Hosting
                       </a>
                   </li>
                   <li>
                       <a href="" className="menu-link">
                           Domain Checker
                       </a>
                   </li>
                   <li>
                       <a href="" className="menu-link">
                           Website Builder
                       </a>
                   </li>
               </ul>
            </nav>  
    
        );
    }
}

export default Menu;