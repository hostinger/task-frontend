import React from "react";
import Timer from "../../components/Timer/Timer";
import "./style.scss";

const Main = () => {
  let endDate = new Date("2019/09/01");
  return (
    <div className="main">
      <div className="main-col1">
        <div className="offer-text">
          New Year Offer
          <br />
          <span>82% off </span>
          Web Hosting
        </div>
        <div className="timer-block">
          <Timer endDate={endDate} />
          <div className="spacer"></div>
        </div>
        <div className="button-container">
          <button className="offer-button">GET STARTED NOW</button>
        </div>
      </div>
      <div className="main-col2">
        <div className="balloon-container">SAVE 82%</div>
        <div className="price">
          <div className="currency">$</div>
          <div className="big-num">1</div>
          <div className="price-right">
            <div className="small-num">45</div>
            <div className="spacer" />
            <div className="monthly">/mo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
