import React, { Component } from 'react';
import Button from '../../button/button.js';
import Clock from '../clock/clock.js';

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: 'May, 4, 2019' };
   }

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
                <Clock deadline={ this.state.deadline } />
                <Button />
            </div> 
        );
    }
}

export default Offer;