import React from 'react';

const countDown = (props) => {
    return (
        <div className={props.name}>
                <div className="countDown__wrapper">
                    <p className="countDown__number">00</p>
                    <p className="countDown__label">days</p>
                </div>
                <div className="countDown__wrapper">
                    <p className="countDown__number">16</p>
                    <p className="countDown__label">hours</p>
                </div>
                <div className="countDown__wrapper">
                    <p className="countDown__number">18</p>
                    <p className="countDown__label">minutes</p>
                </div>
                <div className="countDown__wrapper">
                    <p className="countDown__number">29</p>
                    <p className="countDown__label">seconds</p>
                </div>
        </div>
    )
};

export default countDown