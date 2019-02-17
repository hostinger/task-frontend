import React from 'react';
import PropTypes from 'prop-types';

const Discount = ({ discount }) => (
  <div id="spacing">
    <div className="discount_box">save {discount}%</div>
    <div className="triangle" />
    <div className="price">
      <div id="currency">$</div> <div id="big_number">1</div>
      <div>
        <div id="small_number">45 </div> <div id="month">/mo</div>
      </div>
    </div>
  </div>
);

Discount.propTypes = {
  discount: PropTypes.number,
};

export default Discount;
