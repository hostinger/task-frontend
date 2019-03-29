import React, { Component } from 'react';

import './assets/scss/App.scss';

import Header from './containers/layout/Header';
import Main from './containers/layout/Main';
import Footer from './containers/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
