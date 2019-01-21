import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seconds: "00",
          minutes: "19",
          hours: "16",
          days: "00"
        };
        this.startCountDown = this.startCountDown.bind(this);
        this.handleTick = this.handleTick.bind(this);
      }

      componentDidMount() {
        this.startCountDown();
      }

      handleTick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - min * 60;
    
        this.setState({
          minutes: min,
          seconds: sec
        });
    
        if (sec < 10) {
          this.setState({
            seconds: "0" + this.state.seconds
          });
        }
    
        if (min < 10) {
          this.setState({
            minutes: "0" + min
          });
        }
    
        if ((min === 0) & (sec === 0)) {
          clearInterval(this.intervalHandle);
        }
    
        this.secondsRemaining--;
      }
    
      startCountDown() {
        this.intervalHandle = setInterval(this.handleTick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
      }
    
    render() {
        return (
            <div className="countdown-timer">
                <div className="countdown-timer__item">
                    <span>{this.state.days}</span>
                    <p>DAYS</p>
                </div>
                <div className="countdown-timer__item">
                    <span>{this.state.hours}</span>
                    <p>HOURS</p>
                </div>
                <div className="countdown-timer__item">
                    <span>{this.state.minutes}</span>
                    <p>MINUTES</p>
                </div>
                <div className="countdown-timer__item">
                    <span>{this.state.seconds}</span>
                    <p>SECONDS</p>
                </div>
            </div>
        );
    }
};


export default Timer;