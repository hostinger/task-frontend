import React from 'react';

import Clock from "../../../common/clock/Clock";
import Button from "../../../common/button/Button";

const PromoInfo = () => {
    return (
        <div className="promo-info">
            <p className="promo-info__text">new year offer</p>
            <p className="promo-info__text"><span>82% off</span> web hosting</p>
            <Clock/>
            <Button label='get started now' />
        </div>
    )
};

export default PromoInfo