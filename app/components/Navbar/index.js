import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/logo.svg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './css/style.css';

function Navbar() {
  const nav = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };

  return (
    <React.Fragment>
      <div className="wraper">
        <nav style={nav}>
          <div>
            <Link to="/" className="brand-log">
              <img src={logo2} alt="hostinger logo" className="logo" />
            </Link>
          </div>
          <ul className="right">
            <li>
              <Link to="/">web hosting</Link>
            </li>
            <li>
              <Link to="/places">
                cloud hosting <span className="onSaleSpan">on sale</span>
              </Link>
            </li>
            <li>
              <Link to="/login">vps hosting</Link>
            </li>
            <li>
              <Link to="/login">domain checker</Link>
            </li>
            <li>
              <Link to="/login">website builder</Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

Navbar.propTypes = {};

export default Navbar;
