import React from "react";
import "./style.scss";
const TimerPart = props => {
  return (
    <div className="timer-part">
      <div className="timer-part-number">{props.number}</div>
      <div className="timer-part-title">{props.title}</div>
    </div>
  );
};

export default TimerPart;
