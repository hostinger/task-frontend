import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Nav.scss';

const nav = props => (
    <header className="nav__header">
        <nav className="nav__nav">
            <div className="nav__logo"><a href="/"><Logo /></a></div>
            <div className="nav__spacer" />
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="nav__items">
                <ul>
                    <li><a href="/">WEB HOSTING</a></li>
                    <li classNam="badge-link"><a href="/"><span class="badge-desktop">ON SALE</span>CLOUD HOSTING</a></li>
                    <li><a href="/">VPS HOSTING</a></li>
                    <li><a href="/">DOMAIN CHECKER</a></li>
                    <li><a href="/">WEBSITE BUILDER</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default nav;
