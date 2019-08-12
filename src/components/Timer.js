import React from 'react';
import { stringToDate } from '../helper';

class Timer extends React.Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount() {
    let finalDate = stringToDate(this.props.endDate);
    this.setTime(finalDate);
  }
  
  setTime = (finalDate) => {
    //count how many seconds are left till the given date
    const firstSeconds = Math.round((finalDate - Date.now()) / 1000);
    //display the time
    this.displayTime(firstSeconds);
    //start countdown
    let countdown = setInterval(() => {
      const leftSeconds = Math.round((finalDate - Date.now()) / 1000);
      //stop once 0 is reached
      if(leftSeconds < 0) {
        clearInterval(countdown);
        return;
      }
      this.displayTime(leftSeconds);
    }, 1000);
  }

  displayTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const secondsForHours = seconds % 86400;
    const hours = Math.floor(secondsForHours / 3600);
    const secondsForMinutes = secondsForHours % 3600;
    const minutes = Math.floor(secondsForMinutes / 60);
    const remainingSeconds = secondsForMinutes % 60;
    this.setState({
      days,
      hours,
      minutes,
      seconds: remainingSeconds
    });
  }

  render() {
    const zeroDays = this.state.days < 10 ? "0" : "";
    const zeroHours = this.state.hours < 10 ? "0" : "";
    const zeroMinutes = this.state.minutes < 10 ? "0" : "";
    const zeroSeconds = this.state.seconds < 10 ? "0" : "";
    return (
      <div className="timer-container">
        <div className="left-arrow-timer"></div>
        <div className="timer-holder">
          <div className="days">
              <p>{zeroDays}{this.state.days}</p>
              <p>days</p>
          </div>
          <div className="hours">
              <p>{zeroHours}{this.state.hours}</p>
              <p>hours</p>
          </div>
          <div className="minutes">
              <p>{zeroMinutes}{this.state.minutes}</p>
              <p>minutes</p>
          </div>
          <div className="seconds">
              <p>{zeroSeconds}{this.state.seconds}</p>
              <p>seconds</p>
          </div>
        </div>
        <div className="right-arrow-timer"></div>
      </div>
    );
  }
}

export default Timer;