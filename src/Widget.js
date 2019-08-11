import React from 'react';
import Navigation from './components/Navigation';
import Offer from './components/Offer';
import Footer from './components/Footer';

class Widget extends React.Component {
  state = {
    categories: [
      {
        name: "web hosting",
        onSale: false
      }, {
        name: "cloud hosting",
        onSale: true
      }, { 
        name: "vps hosting",
        onSale: false
      }, {
        name: "domain checker",
        onSale: false
      }, {
        name: "website builder",
        onSale: false
      }
    ],
    mobileVisible: false //state for mobile menu visibility
  }

  //makes mobile menu visible & invisible
  toggleNavMenu = () => {
      this.setState({ mobileVisible: !this.state.mobileVisible });
  }

  render() {
    return (
      <React.Fragment>
        <div className="widget-container">
          <Navigation 
            categories= { this.state.categories }
            mobileVisible= { this.state.mobileVisible } 
            toggleNavMenu= { this.toggleNavMenu } />
          <Offer />
          <Footer />
        </div>
        <div className="background-widget"></div>
      </React.Fragment>
    );
  }
}

export default Widget;
