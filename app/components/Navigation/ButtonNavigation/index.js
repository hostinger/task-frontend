/**
 *
 * ButtonNavigation
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import style from './style.scss';
import messages from './messages';

function ButtonNavigation(prop) {
  return (
    <div className={style.ButtonNavigation}>
      <Link to={prop.url}>{prop.title}</Link>
      {prop.isOnSale && (
        <span className={style.onSale}>
          <FormattedMessage {...messages.on_sale} />
        </span>
      )}
    </div>
  );
}

ButtonNavigation.propTypes = {};

export default memo(ButtonNavigation);
