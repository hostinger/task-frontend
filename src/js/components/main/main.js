import React, { Component } from 'react';
import Offer from '../offer/offer.js';
import Price from '../price/price.js';

class Main extends Component {
    render () {
        return (
            <main className="container main-container">
                <Offer />
                <Price />
            </main>  
        );
    }
}

export default Main;