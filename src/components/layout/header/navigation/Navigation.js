import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import burger from '../../../../assets/burger.svg';


const Navigation = (props) => {
    const tabs = ['web hosting', 'cloud hosting', 'vps hosting', 'domain checker', 'website builder'];

    const nav = tabs.map((tab) => {
        return (
            <Link to={`./${tab.replace(" ", "-")}`}
                  onClick={props.close}
                  className="navigation__item"
                  key={tab}>
                {tab}
            </Link>
        )
    });


    return (
        <nav className={props.name}>
            <div className="navigation__wrapper">
                {nav}
                <Link to={`./cloud-hosting`} className="navigation__promo-message">on sale</Link>
            </div>
            <button type="button" className="navigation__burger" onClick={props.open}>
                <img className='navigation__image' src={burger} alt="menu"/>
            </button>
        </nav>
    )
};

export default Navigation;
