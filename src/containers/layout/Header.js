import React, {Component} from 'react';
import Logo from '../../components/Logo'

class Header extends Component {
  render() {
    return (
      <div className="Header container">
        <nav className="navbar navbar-expand-lg">
          <Logo />
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="nav">
              <div className="nav-item nav-link">WEB HOSTING</div>
              <div className="nav-item nav-link cloud">CLOUD HOSTING</div>
              <div className="nav-item nav-link">VPS HOSTING</div>
              <div className="nav-item nav-link">DOMAIN CHECKER</div>
              <div className="nav-item nav-link">WEBSITE BUILDER</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;