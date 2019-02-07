import React, { Component } from 'react';

class Price extends Component {
    render () {
        return (
            <div className="price-container">
                <div className="saving">
                    <div className="saving-label">
                        save 82%
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="price-block">
                    <div className="price-block__currency">&#8364;</div>
                    <div className="price-block__number">1</div>
                    <div className="price-block__rigth">
                        <div className="price-block__rigth--number">
                            45
                        </div>
                        <div className="price-block__rigth--month">
                            /mo
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Price;