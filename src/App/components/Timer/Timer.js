import React, { Component } from "react";
import TimerPart from "../TimerPart/TimerPart";
import "./style.scss";
export default class Timer extends Component {
  addZeros = number => {
    if (number.toString().length != 2) {
      return (number = "0" + number);
    }
    return number;
  };

  getTimeRemaining = endDate => {
    var t = Date.parse(endDate) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      days: this.addZeros(days),
      hours: this.addZeros(hours),
      minutes: this.addZeros(minutes),
      seconds: this.addZeros(seconds)
    };
  };

  state = {
    date: this.getTimeRemaining(this.props.endDate),
    endDate: this.props.endDate
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({
      date: this.getTimeRemaining(this.state.endDate)
    });
  };

  render() {
    return (
      <div className="timer">
        <div className="triangle-parent">
          <div className="triangle-left" />
        </div>
        <TimerPart number={this.state.date.days} title="days" />
        <TimerPart number={this.state.date.hours} title="hours" />
        <TimerPart number={this.state.date.minutes} title="minutes" />
        <TimerPart number={this.state.date.seconds} title="seconds" />
        <div className="triangle-parent">
          <div className="triangle-right" />
        </div>
      </div>
    );
  }
}
