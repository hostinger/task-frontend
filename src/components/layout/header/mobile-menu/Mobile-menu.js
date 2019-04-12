import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../../../assets/logo.svg';
import burger from '../../../../assets/burger.svg';
import Navigation from "../navigation/Navigation";

function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (open ?
            <div className="mobile-menu-opened">
                <div className="mobile-menu-opened__close-icon" onClick={() => setOpen(false)}>x</div>
                <div className="mobile-menu-opened__menu">
                    <Link className='navigation__item' to='/' onClick={() => setOpen(false)}>home</Link>
                    <Navigation className={"mobile-menu-opened__navigation navigation"} onClick={"{() => setOpen(false)}"}/>
                </div>
            </div> :
            <div className="mobile-menu-closed">
                <div className='container'>
                    <Link className='mobile-menu-closed__logo' to="/"><img className='mobile-menu__image' src={logo} alt="logo"/></Link>
                    <img className='mobile-menu-closed__burger' src={burger} alt="mobile-menu" onClick={() => setOpen(true)}/>
                </div>
            </div>
    )
}

export default MobileMenu


