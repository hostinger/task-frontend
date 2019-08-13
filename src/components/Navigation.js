import React from 'react';
import logoImage from '../styles/assets/logo.svg';
import { camelCaseString } from '../helper';

class Navigation extends React.Component {
  render() {
    const categories = this.props.categories;
    const closeIconToggle = this.props.mobileVisible === true ? "mobile-menu-button close" : "mobile-menu-button";
    const buttonsContainerToggle = this.props.mobileVisible === true ? "buttons-container open" : "buttons-container";
    const navigationColor = this.props.mobileVisible === true ? "navigation open" : "navigation";
    return (
      <nav className={navigationColor}>
          <section className="logo-container">
            <a 
              href="#"
              rel="noopener noreferrer"
              role="button"
              aria-label="button to go to home page">
              <img src={logoImage} alt="hostinger logo"></img>
              </a>
          </section>
          <button 
            aria-label="Open menu" 
            className={closeIconToggle}
            onClick={this.props.toggleNavMenu}>
            <div className="hamburger" role="button">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>
          <section className={buttonsContainerToggle}>
              {categories.map(category => (
                <a 
                  key={camelCaseString(category.name)}
                  href="#"
                  rel="noopener noreferrer">
                  {category.onSale ? (<span>on Sale</span>) : (<span></span>)}
                  {category.name}
                </a>
              )
              )}
          </section>
      </nav>
    );
  }
}

export default Navigation;