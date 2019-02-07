import React, { Component } from 'react';
import OnSale from '../onsaleLabel/onsaleLabel.js'

const list = {
    "data" : [
      {
        "name": "Web Hosting"
      },
      {
        "name": "Cloud Hosting"
      },
      {
        "name": "VPS Hosting"
      },
      {
        "name": "Domain Checker"
      },
      {
        "name": "Website Builder"
      }
    ]
  }
  
  const MenuList = (props) => {
    return (
      <React.Fragment>
        {props.items.data.map(item => (
          <React.Fragment key={item.id}>
            <li>
                <a href="/" title={item.name} className="menu-link">
                    {item.name}
                </a>
            </li>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  };

class Menu extends Component {

    render () {
        return (
            <nav className="menu-container">
               <ul id="menu" className="menu">
                    <MenuList items={list} />
                    <OnSale />
               </ul>
            </nav>  
    
        );
    }
}

export default Menu;