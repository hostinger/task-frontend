import React, {Component} from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({days, hours, minutes, seconds}) => {
  return (
    <div className="timer">
      <span className="days">{days}</span>
      <span className="hours">{hours}</span>
      <span className="mins">{minutes}</span>
      <span className="secs">{seconds}</span>
    </div>
  )
};

class Timer extends Component {
  render() {
    return (
      <React.Fragment >
        <Countdown
          date={'2020-01-01'}
          renderer={renderer}
        />
      </React.Fragment>
    );
  }
}

export default Timer;