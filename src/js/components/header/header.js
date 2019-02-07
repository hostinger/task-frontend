import $ from 'jquery';
import React, { Component } from 'react';
import Menu from './menu/menu.js';

class Header extends Component {

    openMenu (element) {
        $(`#${element}`).toggleClass('open');
        $('#menu').toggleClass('menu-mobile');
    };


    render () {
        return (
            <header className="container header-container">
                <div>
                    <img  className="logo" src="/img/logo.png" alt="Logo"/> 
                </div>
                <Menu />
                <div id="nav-icon" className="menu-hamburger" onClick={() => this.openMenu('nav-icon')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>  
    
        );
    }
}

export default Header;