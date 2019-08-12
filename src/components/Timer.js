import React from 'react';

class Timer extends React.Component {
  render() {
    return (
      <div className="timer-container">
        <div className="left-arrow-timer"></div>
        <div className="timer-holder">
          <div className="days">
              <p>25</p>
              <p>days</p>
          </div>
          <div className="hours">
              <p>05</p>
              <p>hours</p>
          </div>
          <div className="minutes">
              <p>55</p>
              <p>minutes</p>
          </div>
          <div className="seconds">
              <p>25</p>
              <p>seconds</p>
          </div>
        </div>
        <div className="right-arrow-timer"></div>
      </div>
    );
  }
}

export default Timer;