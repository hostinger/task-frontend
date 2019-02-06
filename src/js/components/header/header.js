import React, { Component } from 'react';
import Menu from '../menu/menu.js';

class Header extends Component {
    render () {
        return (
            <header className="container header-container">
                <div>
                    <img  className="logo" src="/src/styles/assets/logo.png" alt="Logo"/> 
                </div>
                <Menu />
                <div id="nav-icon" className="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>  
    
        );
    }
}

export default Header;