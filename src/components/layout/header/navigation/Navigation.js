import React from 'react';
import {Link} from 'react-router-dom';



function Navigation(props) {
    return (
        <nav className={props.className}>
            <Link key="1" className='navigation__item' to='#' >web hosting</Link>
            <div className='navigation__item-container'>
                <p className="navigation__promo-message">on sale</p>
                <Link key="2" className='navigation__item' to='#'>cloud hosting</Link>
            </div>
            <Link key="3" className='navigation__item' to='#'>vps hosting</Link>
            <Link key="4" className='navigation__item' to='#'>domain checker</Link>
            <Link key="5" className='navigation__item' to='#'>website builder</Link>
        </nav>
    )
}

export default Navigation


