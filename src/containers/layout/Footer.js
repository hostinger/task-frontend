import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="container nav justify-content-between">
          <li className="nav-item">
            <div className="nav-link">Guaranteed 99.9% Uptime</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Superior Speed Performance</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">24/7 Support Chat</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">30-Day Money-Back Guarantee</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;