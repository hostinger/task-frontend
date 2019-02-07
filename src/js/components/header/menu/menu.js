import React, { Component } from 'react';
import OnSale from '../onsaleLabel/onsaleLabel.js'

class Menu extends Component {

    render () {
        return (
            <nav className="menu-container">
               <ul id="menu" className="menu">
                   <li>
                       <a href="/" title="Web Hosting" className="menu-link">
                            Web Hosting
                       </a>
                   </li>
                   <li>
                       <OnSale />
                       <a href="/" title="Cloud Hosting" className="menu-link">
                           Cloud Hosting
                       </a>
                   </li>
                   <li>
                       <a href="/" title="VPS Hosting" className="menu-link">
                           VPS Hosting
                       </a>
                   </li>
                   <li>
                       <a href="/" title="Domain Checker" className="menu-link">
                           Domain Checker
                       </a>
                   </li>
                   <li>
                       <a href="/" title="Website Builder" className="menu-link">
                           Website Builder
                       </a>
                   </li>
               </ul>
            </nav>  
    
        );
    }
}

export default Menu;