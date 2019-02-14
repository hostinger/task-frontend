import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "../styles/navigation.scss"
import "../styles/burger.css"

class Navigation extends Component {

    render() {

        return (
            <nav className={'nav__wrapper'}>
                <div className={'nav'}>
                    <div className={'nav__logo'}>
                        <NavLink exact to="/">
                            <div className={'nav__logo__img'} />
                        </NavLink>
                    </div>
                    <Menu right>
                        <ul>
                            <li>
                                <NavLink className={"menu-item"} exact to="/">WEB HOSTING</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/cloudHosting/">Cloud Hosting</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/vpsHosting/">Vps Hosting</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/domainChecker/">Domain Checker</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/websiteBuilder/">Website Builder</NavLink>
                            </li>
                        </ul>
                    </Menu>
                    <ul className={'nav__list'}>
                        <li>
                            <NavLink exact to="/">WEB HOSTING</NavLink>
                        </li>
                        <li>
                            <span>On Sale</span>
                            <NavLink exact to="/cloudHosting/">Cloud Hosting</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/vpsHosting/">Vps Hosting</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/domainChecker/">Domain Checker</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/websiteBuilder/">Website Builder</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;