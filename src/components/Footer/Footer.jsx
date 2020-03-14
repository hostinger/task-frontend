import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerItems: [
        'Guaranteed 99.9% Uptime',
        'Superior Speed Performance',
        '24/7 Support Chat',
        '30-Day Money-Back Guarantee'
      ]
    }
  }

  renderFooterItems() {
    return this.state.footerItems.map((item, index) => (
        <div key={ index } className="footer-item">
          <span className="footer-icon icon"></span>
          <span className="footer-text"> { item } </span>
        </div>
    ));
  }

  /* 
  Let's imagine that footer items are coming from backend
  and we saved them in component's state.
  */
  render() {
    return !!this.state.footerItems.length &&(
      <div className="footer">
        { this.renderFooterItems() }
      </div>
    );
  }
}

export default Footer;
