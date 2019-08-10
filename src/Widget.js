import React from 'react';
import Navigation from './components/Navigation';
import Offer from './components/Offer';
import Footer from './components/Footer';

class Widget extends React.Component {
  render() {
    return (
      <div className="widget-container">
        <Navigation />
        <Offer />
        <Footer />
      </div>
    );
  }
}

export default Widget;
