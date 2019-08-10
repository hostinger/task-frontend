import React from 'react';
import Timer from './Timer.js';

class Offer extends React.Component {
  render() {
    return (
        <React.Fragment>
            <section className="offer-container">
                <h1>New Year Offer <span className="red">82% off</span> Web Hosting</h1>
                <Timer />
                <button className="call-to-action-button">Get started now</button>
            </section>
            <section className="price-container">
                <p className="label">Save 82%</p>
                <div className="big-price-container">
                    <p>$</p>
                    <p>1</p>
                    <div>
                        <p>45</p>
                        <p>/mo</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

export default Offer;