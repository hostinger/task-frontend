/**
 *
 * Typography
 *
 */

import React, { memo } from 'react';
import style from './style.scss';

function Typography(prop) {
  const CustomTag = `${prop.variant}`;
  return (
    <span className={prop.className}>
      <CustomTag className={`${style[prop.size]} `}>{prop.children}</CustomTag>
    </span>
  );
}

Typography.propTypes = {};

export default memo(Typography);
