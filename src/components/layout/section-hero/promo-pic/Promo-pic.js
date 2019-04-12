import React from 'react';

import PromoTag from "../../../common/promo-tag/Promo-tag";

const PromoPic = (props) => {
    return (
        <div className="promo-pic">
            <p className="promo-pic__currency">$</p>
            <p className="promo-pic__dollars">1</p>
            <p className="promo-pic__cents">45</p>
            <p className="promo-pic__term">/mo</p>
            <PromoTag
                name="tag promo-pic__tag"
                label="save 82%"/>
        </div>
    )
};

export default PromoPic