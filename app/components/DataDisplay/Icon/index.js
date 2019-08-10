/**
 *
 * Icon
 *
 */

import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import style from './style.scss';

function Icon() {
  return (
    <span className={style.iconStyle}>
      <FontAwesomeIcon icon={faCheck} />
    </span>
  );
}

Icon.propTypes = {};

export default memo(Icon);
