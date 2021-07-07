/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/logo.svg';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './css/style.css';

class Navbar extends React.Component {
  state = {
    showMenu: false,
  };

  // showMenu = () => {
  //   this.setState({ showMenu: !this.state.showMenu });
  // };
  showMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };

  render() {
    const { showMenu } = this.state;
    return (
      <React.Fragment>
        <div className="wraper">
          <nav className="navbar">
            <div>
              <Link to="/" className="brand-log">
                <img src={logo2} alt="hostinger logo" className="logo" />
              </Link>
            </div>
            <div className="flex1" />
            <div className="mobileMenu">MENU</div>
            <button
              type="button"
              className="togle-button"
              onClick={this.showMenu}
            >
              <i className="fa fa-bars hamburger" aria-hidden="true" />
            </button>
            <ul className="nav-listItem-Wraper">
              <li>
                <Link to="/">web hosting</Link>
              </li>
              <li>
                <Link to="/">
                  cloud hosting <span className="onSaleSpan">on sale</span>
                </Link>
              </li>
              <li>
                <Link to="/">vps hosting</Link>
              </li>
              <li>
                <Link to="/">domain checker</Link>
              </li>
              <li>
                <Link to="/">website builder</Link>
              </li>
            </ul>
          </nav>
          {showMenu ? (
            <nav className="nav-mobile">
              <ul className="mobile-ul">
                <li>
                  <Link to="/">web hosting</Link>
                </li>
                <li>
                  <Link to="/">
                    cloud hosting{' '}
                    <span className="onSaleSpanMobile">on sale</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">vps hosting</Link>
                </li>
                <li>
                  <Link to="/">domain checker</Link>
                </li>
                <li>
                  <Link to="/">website builder</Link>
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
