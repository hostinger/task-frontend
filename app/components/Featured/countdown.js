/* eslint-disable no-empty */
import React, { Component } from 'react';

export default class Countdown extends Component {
  state = {
    deadline: 'Feb, 28, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  };

  getTimeUntil(value) {
    const time = Date.parse(value) - Date.parse(new Date());
    if (time < 0) {
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <div>
        <div className="countdown_item">
          <span id="left_triangle" />
          <div>
            <div className="countdown_time">{this.state.days}</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div>
            <div className="countdown_time">{this.state.hours}</div>
            <div className="countdown_tag">Hours</div>
          </div>
          <div>
            <div className="countdown_time">{this.state.minutes}</div>
            <div className="countdown_tag">Minutes</div>
          </div>
          <div>
            <div className="countdown_time">{this.state.seconds}</div>
            <div className="countdown_tag">Secounds</div>
          </div>
          <span id="right_triangle" />
        </div>
      </div>
    );
  }
}
