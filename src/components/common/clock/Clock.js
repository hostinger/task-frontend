import React from 'react';
import Countdown, {zeroPad} from 'react-countdown-now';

const renderer = ({days, hours, minutes, seconds}) => {
    return (
        <div className="countDown promo-info__countDown">
            <div className="countDown__wrapper">
                <p className="countDown__number">{zeroPad(days, 2)}</p>
                <p className="countDown__label">days</p>
            </div>
            <div className="countDown__wrapper">
                <p className="countDown__number">{zeroPad(hours, 2)}</p>
                <p className="countDown__label">hours</p>
            </div>
            <div className="countDown__wrapper">
                <p className="countDown__number">{zeroPad(minutes, 2)}</p>
                <p className="countDown__label">minutes</p>
            </div>
            <div className="countDown__wrapper">
                <p className="countDown__number">{zeroPad(seconds, 2)}</p>
                <p className="countDown__label">seconds</p>
            </div>
        </div>
    )
};

const Clock = () => {
    return (
        <Countdown date={Date.now() + 58709000} renderer={renderer}/>
    )
};

export default Clock