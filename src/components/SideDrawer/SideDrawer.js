import React from 'react';
import './SideDrawer.scss';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">WEB HOSTING</a></li>
                <li classNam="badge-link"><a href="/">CLOUD HOSTING<span class="badge-mobile"> ON SALE</span></a></li>
                <li><a href="/">VPS HOSTING</a></li>
                <li><a href="/">DOMAIN CHECKER</a></li>
                <li><a href="/">WEBSITE BUILDER</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;