import React from 'react';
import Header from './Header/Header.jsx';
import Promotion from './Promotion/Promotion.jsx';
import Footer from './Footer/Footer.jsx';

class Program extends React.Component {
  render() {
    return (
      <div className="page wrapper">
        <Header />
        <Promotion 
          type = "New year offer" //Could be variable from backend.
          discount = "82" //Could be variable from backend.
          title = "Web hosting" //Could be variable from backend.
        />
        <Footer />
      </div>
    );
  }
}

export default Program;
