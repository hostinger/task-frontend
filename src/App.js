import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Banner from './components/Banner/Banner';
import Perks from './components/Perks/Perks';

class App extends Component {
  state = {
    drawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Container">
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.drawerOpen} />
          <Banner />
          <Perks />
        </div>
      </div>
    );
  }
}

export default App;
