import React from "react";
import "../../styles/Overflow.scss";
import Logo from "../../../components/Logo";
import Close from "../../../assets/x.png";

const Overflow = props => {
  return (
    <div className="overflow-wrapper">
      <div className="overflow-center">
        <Logo />
        <ul className="navbar--horizontal">
          {props.navConfig.map(navItem => {
            return (
              <li>
                <a href={navItem.href}>
                  <div className="navbar-itemWrapper">
                    <span className="navbar-item">{navItem.title}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <div class="close-button" onClick={e => props.toggleOverflow()}>
          <img src={Close} height={30} width={30} />
        </div>
      </div>
    </div>
  );
};

export default Overflow;
