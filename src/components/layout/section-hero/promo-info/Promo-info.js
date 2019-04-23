import React from 'react';

import Clock from "../../../common/clock/Clock";

const PromoInfo = (props) => {
    return (
        <div className="promo-info">
            <p className="promo-info__text">new year offer</p>
            <p className="promo-info__text"><span>82% off</span> web hosting</p>
            <Clock/>
        </div>
    )
};

export default PromoInfo