import React from "react";
import "../../ui/styles/Countdown.scss";

const Countdown = props => {
  return (
    <div className="countdown">
      <div className="countdown-leftTriangle"></div>
      <div className="countdown-days flex">
        <span className="numbers">00</span>
        <span className="label">Days</span>
      </div>
      <div className="countdown-hours flex">
        <span className="numbers">16</span>
        <span className="label">Hours</span>
      </div>
      <div className="countdown-minutes flex">
        <span className="numbers">18</span>
        <span className="label">Minutes</span>
      </div>
      <div className="countdown-seconds flex">
        <span className="numbers">29</span>
        <span className="label">Seconds</span>
      </div>
      <div className="countdown-rightTriangle"></div>
    </div>
  );
};
Countdown.defaultProps = {
  date: "Monday"
};

export default Countdown;
