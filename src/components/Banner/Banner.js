import React from 'react';
import './Banner.scss';
import Offer from '../Offer/Offer';
import Pricing from '../Pricing/Pricing';

const banner = props => {
    return (
        <div className="banner">
            <Offer />
            <Pricing />
        </div>
    );
};

export default banner;