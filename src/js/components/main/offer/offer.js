import React, { Component } from 'react';
import Countdown from '../counter/counter.js';
import Button from '../../button/button.js';

class Offer extends Component {
    render () {
        return (
            <div className="offer-container">
                <h1 className="offer-container__heading">
                        New Year Offer <br/>
                    <span className="offer-container__heading--red">
                        82% OFF
                    </span> 
                         Web Hosting
                </h1>
                <Countdown />
                <Button />
            </div> 
        );
    }
}

export default Offer;