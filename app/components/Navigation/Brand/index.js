/**
 *
 * Brand
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import style from './style.scss';

function Brand(prop) {
  return (
    <Link to={prop.url}>
      <img className={style.BrandLogo} src={prop.logo} alt={prop.alt} />
    </Link>
  );
}

Brand.propTypes = {};

export default memo(Brand);
