import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './css/style.css';

function WhyPickUs() {
  return (
    <React.Fragment>
      <div className="wraper">
        <ul className="pickUsUl">
          <li>
            <i className="fa fa-check iconCheck" aria-hidden="true" />
            Guaranteed 99.9% Uptime
          </li>
          <li>
            <i className="fa fa-check iconCheck" aria-hidden="true" /> Superior
            Speed Performance
          </li>
          <li>
            <i className="fa fa-check iconCheck" aria-hidden="true" /> 24/7
            Support Chat
          </li>
          <li>
            <i className="fa fa-check iconCheck" aria-hidden="true" /> 30-Day
            Money-Back Guarantee
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

WhyPickUs.propTypes = {};

export default WhyPickUs;
