
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import Navigation from '../navigation/Navigation';


function DesktopMenu() {
    return (
        <div className='desktop-menu'>
            <div className='container'>
                <Link className='desktop-menu__logo' to="/"><img className='desktop-menu__image'src={logo} alt="logo"/></Link>
                <Navigation className={"desktop-menu__navigation navigation"}/>
            </div>
        </div>
    )
}

export default DesktopMenu