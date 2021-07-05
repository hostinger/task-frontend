import React, { Component } from 'react';

const navigation = {
    "data" : [
      {
        "id": "0",
        "name": "Web Hosting",
        "url": "#",
        "sale": ""
      },
      {
        "id": "1",
        "name": "Cloud Hosting",
        "url": "#",
        "sale": "On Sale"
      },
      {
        "id": "2",
        "name": "VPS Hosting",
        "url": "#",
        "sale": ""
      },
      {
        "id": "3",
        "name": "Domain Checker",
        "url": "#",
        "sale": ""
      },
      {
        "id": "4",
        "name": "Website Builder",
        "url": "#",
        "sale": ""
      }
    ]
  }
  
  const MenuList = (props) => {
    return (
      <React.Fragment>
        {props.items.data.map(item => (
          <React.Fragment key={item.id}>
            <li>
                { item.sale? (<div className="on-sale__label">{item.sale}</div>): null }
                <a href={item.url} title={item.name} className="menu-link">{item.name}</a>
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
                    <MenuList items={navigation} />
               </ul>
            </nav>  
    
        );
    }
}

export default Menu;