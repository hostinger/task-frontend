import React from "react";
import MenuContent from "../../components/MenuContent/MenuContent";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import "./style.scss";
import logo from "../../../assets/logo.svg";
const NavBar = props => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="#">
          <img src={logo} />
        </a>
      </div>
      <div className="space" />
      <MenuContent
        className={"nav-items"}
        drawerHandler={props.drawerHandler}
        drawerActive={props.drawerActive}
      />
      <ToggleButton onClick={props.drawerHandler} active={props.drawerActive} />
    </nav>
  );
};

export default NavBar;
