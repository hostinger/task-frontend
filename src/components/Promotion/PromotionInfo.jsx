import React from 'react';
import Button from '../Common/Button.jsx';
import CustomCountdown from './CustomCountdown.jsx';

class PromotionInfo extends React.Component {
  render() {
    return(
      <div className="promotion-info wrapper">
        <h1 className="offer-type"> { this.props.type } </h1>
        <div className="offer-info-wrapper"> 
            <h2 className="offer-discount"> { this.props.discount + "% OFF"  } </h2>
            <h2 className="offer-title"> { this.props.title } </h2>
        </div>
        <div className="promotion-countdown wrapper">
          <span className="countdown-icon right" ></span>
          <CustomCountdown />
          <span className="countdown-icon left" ></span>
        </div>
        <Button 
          btnText = "Get started now" 
        />
        </div>
    );
  }
}

export default PromotionInfo;