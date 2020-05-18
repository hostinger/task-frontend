import React from 'react';

import Timer from '../Timer/Timer';
import './Offer.scss';

const offer = props => {
    return (
        <div className="container">
            <div className="text">New Year Offer</div>
            <div className="text"><span class="percentage">82% OFF</span> Web Hosting</div>
            <div className="timer">
            <div class="triangle-right"></div>
            <Timer />
            <div class="triangle-left"></div>
            </div>
            <button className="button">GET STARTED NOW</button>
        </div>        
    );
};

export default offer;