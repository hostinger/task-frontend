import React from 'react';

import CountDown from "../../../common/count-down/Count-down";

const PromoInfo = (props) => {
    return (
        <div className="promo-info">
            <p className="promo-info__text">new year offer</p>
            <p className="promo-info__text"><span>82% off</span> web hosting</p>
            <CountDown
                name="countDown promo-info__countDown"/>

        </div>
    )
};

export default PromoInfo