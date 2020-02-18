import React from "react";
import "../../styles/Features.scss";
import CheckIcon from "../../../assets/check-20.png";

const Features = props => {
  return (
    <div className="features container">
      <div className="row features-row">
        {props.featuresConfig.map(featureItem => {
          return (
            <div className="features-item col-sm-12 col-md-5 col-lg">
              <img src={CheckIcon} alt="checkItem" />
              <span> {featureItem.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
