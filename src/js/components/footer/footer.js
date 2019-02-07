import React, { Component } from 'react';

const list = {
    "data" : [
      {
        "id": "0",
        "name": "Guaranteed 99.9% Uptime"
      },
      {
        "id": "1",
        "name": "Superior Speed Performance"
      },
      {
        
        "id": "2",
        "name": "24/7 Support Chat"
      },
      {
        "id": "3",
        "name": "30-Day Money-Back Guarantee"
      }
    ]
  }
  
  const FooterList = (props) => {
    return (
      <React.Fragment>
        {props.items.data.map(item => (
          <React.Fragment key={item.id}>
            <li className="list-item">
                <div className="checkmark"/>
                <div>{item.name}</div>
            </li>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }

class Footer extends Component {
    render () {
        return (
            <footer className="container footer-container">
                <ul className="footer-list">
                    <FooterList items={list} />
                </ul>
            </footer>
        );
    }
}

export default Footer;