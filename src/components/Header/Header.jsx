import React from 'react';
import MainMenu from './MainMenu.jsx';

class Header extends React.Component {
    render() {
        return (
          <div className="header wrapper">
            <div className="logo image"></div>
            <MainMenu />
          </div>
        );
    }
}

export default Header;