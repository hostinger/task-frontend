import React from 'react';
import logoImage from './assets/logo.svg'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
          <section className="logo-container">
            <img src={logoImage} alt="hostinger logo"></img>
          </section>
          <section className="buttons-container">
              <a href="#builder">Website Builder</a>
          </section>
      </nav>
    );
  }
}

export default Navigation;