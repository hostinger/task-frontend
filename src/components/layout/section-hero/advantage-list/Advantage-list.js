import React from 'react';
import ok from '../../../../assets/ok.svg'

const AdvantageList = (props) => {
    return (
        <ul className="advantageList">
            <li className="advantageList__item"><img className="icon" src={ok} alt=""/>Guaranteed 99.99% uptime</li>
            <li className="advantageList__item"><img className="icon" src={ok} alt=""/>Superior speed performance</li>
            <li className="advantageList__item"><img className="icon" src={ok} alt=""/>24/7 support chat</li>
            <li className="advantageList__item"><img className="icon" src={ok} alt=""/>30-Day Money-Back Guarantee</li>
        </ul>
    )
};

export default AdvantageList