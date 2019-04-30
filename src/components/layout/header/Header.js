import React, {useState} from 'react';
import Navigation from './navigation/Navigation';
import {Link} from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import MenuModal from "./menu-modal/_Menu-modal";



function Header() {
    const [openedModal, setOpenedModal] = useState(false);

    return (
        (openedModal? <MenuModal close={() => setOpenedModal(false)}/> :
        <header className='header'>
            <div className="container">
                <Link className='header__logo' to="/" >
                    <img className='header__image' src={logo} alt="logo"/>
                </Link>
                <Navigation name = {'desktop-menu__navigation navigation'} open={() => setOpenedModal(true)}/>
            </div>
        </header>
        )
    )
}

export default Header

