import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
class App extends Component {
  render() {
    return (
      <div className="main-banner-container App">
        <Navbar />
        <Banner />
      </div>
    );
  }
}

export default App;
