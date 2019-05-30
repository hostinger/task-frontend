/**
 *
 * Typography
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import style from './style.scss';

// import messages from './messages';

function Typography(prop) {
  const CustomTag = `${prop.variant}`;
  return (
    <div className={prop.className}>
      <CustomTag className={`${style[prop.size]} `}>{prop.children}</CustomTag>
    </div>
  );
}

Typography.propTypes = {};

export default memo(Typography);
