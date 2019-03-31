import React, {Component} from 'react';
import Button from '../../components/Button'
import Countdown from '../../components/Timer'

class Main extends Component {
  render() {
    return (
      <div className="Main container">
        <div className="left">
          <h1>New Year Offer<br/><span>82% OFF</span> Web Hosting</h1>
          <div className="countdown">
            <div className="arrowLeft" />
            <Countdown/>
            <div className="arrowRight" />
          </div>
          <Button />
        </div>
        <div className="right">
          <div className="popover">
            <p>SAVE 82%</p>
            <div className="arrow"/>
          </div>
          <p className="one">1</p>
          <p className="sign">$</p>
          <p className="number">45</p>
          <p className="month">/mo</p>
        </div>
      </div>
    );
  }
}

export default Main;