import React from 'react';
import './Perks.scss';

const perks = props => {
    return (
        <div className="perks">
            <ul>
                <li><i class="fa fa-1x fa-check" aria-hidden="true"></i> Guaranteed 99.9% Uptime</li>
                <li><i class="fa fa-1x fa-check" aria-hidden="true"></i> Superior Speed Performance</li>
                <li><i class="fa fa-1x fa-check" aria-hidden="true"></i> 24/7 Support Chat</li>
                <li><i class="fa fa-1x fa-check" aria-hidden="true"></i> 30-Day Money-Back Guarantee</li>
            </ul>
        </div>
    );
};

export default perks;

