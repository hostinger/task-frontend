import React from "react";
import "../../ui/styles/Tooltip.scss";

const Tooltip = props => {
  return (
    <div className="tooltip-box ">
      <div className="tooltip-box-body">{props.value}</div>
      <div className="tooltip-box-triangle"></div>
    </div>
  );
};

export default Tooltip;
