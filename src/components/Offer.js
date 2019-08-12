import React from 'react';
import Timer from './Timer.js';

class Offer extends React.Component {
  render() {
    return (
        <React.Fragment>
            <section className="offer-container">
                <h1>New Year Offer</h1>
                <h1><span className="red">82% off</span> Web Hosting</h1>
                <Timer endDate = { this.props.endDate } />
                <button className="call-to-action-button">Get started now</button>
            </section>
            <section className="price-container">
                <div className="label">
                    <p>Save 82%</p>
                    <div className="arrow"></div>
                </div>
                <div className="big-price-container">
                    <p className="currency">$</p>
                    <p className="dollars">1</p>
                    <div className="cents">
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