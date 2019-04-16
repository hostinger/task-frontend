import React from 'react';
import Countdown from 'react-countdown-now';

class CustomCountdown extends React.Component {

  //Custom function to render countdown timer in needed format.
  formatCountdownTimer(props) {
    return (
      <div className="countdown-timer wrapper">
        { Object.keys(props.formatted).map((key) => 
          <div key={ key }  className={ "countdown-timer-" + key } >
            <p className="timer-value"> { props.formatted[key] } </p>
            <p className="timer-key"> { key } </p>
          </div>
        ) }
      </div>
    );
  }

  render() {
    return(
      <Countdown 
        date= { Date.now() + 1000000 } 
        renderer = { this.formatCountdownTimer }
      />
    );
  }
}

export default CustomCountdown;