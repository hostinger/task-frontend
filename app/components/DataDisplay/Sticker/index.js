/**
 *
 * Sticker
 *
 */

import React, { memo } from 'react';
import style from './style.scss';

function Sticker(prop) {
  return (
    <div className={style.sticker}>
      <p>{prop.stickerText}</p>
      <span className={style.arrow} />
    </div>
  );
}

Sticker.propTypes = {};

export default memo(Sticker);
