import React from "react";
import "./style.scss";

const MenuContent = props => {
  return (
      <div className={props.className}>
        <ul>
          <li>
            <a href="#web">Web hosting</a>
          </li>
          <li className="parent-sale">
            <a href="#cloud">
              <div className="sale">on sale</div>
              Cloud Hosting
            </a>
          </li>
          <li>
            <a href="#vps">Vps hosting</a>
          </li>
          <li>
            <a href="#domain">Domain checker</a>
          </li>
          <li>
            <a href="#builder">Website builder</a>
          </li>
        </ul>
      </div>
  );
};

export default MenuContent;
