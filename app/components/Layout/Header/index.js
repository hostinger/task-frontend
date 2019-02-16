/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../images/logo.svg';
import './style/style.scss';
function Header() {
  return (
    <Navbar expand="md" className="nav">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="Hostinger logo"
        />
      </Navbar.Brand>
      <div id="empty" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav pullRight className="mr-auto">
          <Nav.Link href="#link" className="item">
            web hosting
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            <span className="badge">On sale</span>
            cloud hosting
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            vps hosting
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            domain checker
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            website builder
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
