import React from "react";
import Countdown from "../../../components/Countdown";
import Button from "../../../components/Button";
import "../../styles/CountdownOffer.scss";

const CountdownOffer = props => {
  let style = `${props.className} countdownOffer`;
  return (
    <div className={style}>
      <div className="countdownOffer-text">
        <h1>
          New Year Offer <br />
          <span className="red">82% OFF </span>
          Web Hosting
        </h1>
      </div>
      <div className="countdownOffer-countdown">
        <Countdown endDate={props.countdownOfferConfig.endDateInMilliseconds} />
      </div>
      <div className="countdownOffer-button">
        <div className="countdownOffer-button--center">
          <Button text={props.countdownOfferConfig.buttonText} />
        </div>
      </div>
    </div>
  );
};

export default CountdownOffer;
