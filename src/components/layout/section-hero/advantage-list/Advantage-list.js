import React from 'react';
import ok from '../../../../assets/ok.svg'

const AdvantageList = (props) => {
    const advantages = ['Guaranteed 99.99% uptime', 'Superior speed performance', '24/7 support chat', '30-Day Money-Back Guarantee'];

    const advantageList = advantages.map((advantage) => {
        return (
            <li className="advantageList__item"
                  key={advantage}>
                <img className="icon" src={ok} alt=""/>
                {advantage}
            </li>
        )
    });
    return (
        <ul className="advantageList">
            {advantageList}
        </ul>
    )
};

export default AdvantageList