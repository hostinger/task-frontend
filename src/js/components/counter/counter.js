
import React, { PropTypes, Component } from 'react';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
        }
      }

      componentDidMount() {
        this.interval = setInterval(() => {
          const date = this.calculateCountdown(this.props.date);
          date ? this.setState(date) : this.stop();
        }, 1000);
      }
    
      componentWillUnmount() {
        this.stop();
      }
    
      calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    
        if (diff <= 0) return false;
    
        const timeLeft = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          millisec: 0,
        };
    
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
          timeLeft.years = Math.floor(diff / (365.25 * 86400));
          diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
          timeLeft.days = Math.floor(diff / 86400);
          diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
          timeLeft.hours = Math.floor(diff / 3600);
          diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
          timeLeft.min = Math.floor(diff / 60);
          diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
    
        return timeLeft;
      }
    
      stop() {
        clearInterval(this.interval);
      }
    
      addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
          value = '0' + value;
        }
        return value;
      }

    render () {
        const countDown = this.state;
        return (
                <div className="counter">
                    <div className="arrow-right"></div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.addLeadingZeros(countDown.days)}
                        </div>
                        <div className="counter__block--text">
                        {countDown.days === 1 ? 'Day' : 'Days'}
                        </div>
                    </div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.addLeadingZeros(countDown.hours)}
                        </div>
                        <div className="counter__block--text">
                            Hours
                        </div>
                    </div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.addLeadingZeros(countDown.min)}
                        </div>
                        <div className="counter__block--text">
                            Minutes
                        </div>
                    </div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.addLeadingZeros(countDown.sec)}
                        </div>
                        <div className="counter__block--text">
                            Seconds
                        </div>
                    </div>
                    <div className="arrow-left"></div>
                </div>
        );
    }
}

// Countdown.propTypes = {
//     date: PropTypes.string.isRequired
// };
  
Countdown.defaultProps = {
    date: new Date()
};

export default Countdown;