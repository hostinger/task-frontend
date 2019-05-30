/**
 *
 * TimerHolder
 *
 */

import React, { memo } from 'react';
import style from './style.scss';

function TimerHolder(prop) {
  return (
    <div className={style.time_holder}>
      <div className={style.value}>{prop.time}</div>
      <div className={style.text}>{prop.helperText}</div>
    </div>
  );
}

TimerHolder.propTypes = {};

export default memo(TimerHolder);
