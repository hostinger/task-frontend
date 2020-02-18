import React from "react";
import "../../styles/Header.scss";
import Logo from "../../../components/Logo";

const Header = props => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <a href="#">
            <Logo />
          </a>
        </div>
        <div className="navbar">
          <ul className="navbar--horizontal">
            {props.navConfig.map(navItem => {
              return (
                <li>
                  <a href={navItem.href}>
                    <div className="navbar-itemWrapper">
                      {navItem.notification && (
                        <span className="navbar-notification">
                          {navItem.notification}
                        </span>
                      )}
                      <span className="navbar-item">{navItem.title}</span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="icon-one navbar-button" onClick={props.toggleOverflow}>
          <div class="hamburger hamburger-one"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
