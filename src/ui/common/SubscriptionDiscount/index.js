import React from "react";
import "../../styles/SubscriptionDiscount.scss";
import Tooltip from "../../../components/Tooltip";

const SubscriptionDiscount = props => {
  console.log(props);
  let style = `${props.className} subscriptionDiscount`;
  return (
    <div className={style}>
      <div className="tooltip-floater">
        <div className="tooltip-floater-center">
          <Tooltip value={props.subscriptionDiscountConfig.tooltipText} />
        </div>
      </div>
      <div className="subscriptionPrice">
        <div className="subscriptionPrice--columnWrapper">
          <span className="subscriptionPrice-currency">
            {props.subscriptionDiscountConfig.currency}
          </span>
        </div>
        <span className="subscriptionPrice-units">
          {props.subscriptionDiscountConfig.priceInt}
        </span>
        <div className="subscriptionPrice--columnWrapper">
          <span className="subscriptionPrice-decimals">
            {props.subscriptionDiscountConfig.priceDecimal}
          </span>
          <span className="subscriptionPrice-subscription">
            {props.subscriptionDiscountConfig.subscription}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDiscount;
