import React from 'react';
import MobileMenu from './mobile-menu/Mobile-menu';
import DesktopMenu from './desktop-menu/Desktop-menu';


function Header() {
    return (
        <header className='main-menu'>
                <DesktopMenu/>
                <MobileMenu/>
        </header>
    )
}

export default Header







