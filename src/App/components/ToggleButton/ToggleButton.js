import React from "react";
import "./style.scss";
const DrawerToggle = props => {
  return (
    <div className="burger-container">
      <button
        className={`toggle-button${props.active ? " active" : ""}`}
        onClick={props.onClick}
      >
        <div className="toggle-button-part-top" />
        <div className="toggle-button-part-middle" />
        <div className="toggle-button-part-bottom" />
      </button>
    </div>
  );
};

export default DrawerToggle;
