/**
 *
 * BigPrice
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import Typography from '../Typography/Loadable';
// import messages from './messages';
import style from './style.scss';
import Sticker from '../Sticker/Loadable';

const getCurency = countryCode => {
  switch (countryCode) {
    case 'LT':
    case 'EU':
    case 'DE':
      return '&euro;';
    case 'US':
    case 'CA':
      return '&dollar;';
    case 'PL':
      return '&#122;&#322;';
    case 'GB':
      return '&#163;';
    default:
      return '&euro;';
  }
};

const splitPrice = price => `${price}`.split('.');

function BigPrice(prop) {
  const renderHTML = rawHTML =>
    React.createElement('div', {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  const curency = getCurency(prop.country) || prop.customCurency;

  const splitedPrice = splitPrice(prop.price);
  return (
    <div className={`row ${style.priceBox}`}>
      <Typography
        className={`col-md-3 ${style.curency}`}
        variant="h1"
        size="xmd"
      >
        {renderHTML(curency)}
      </Typography>
      <Typography
        className={`col-md-5 ${style.bigPrice}`}
        variant="h1"
        size={`${Number(splitedPrice[1]) < 10 ? 'big' : 'xxsm'}`}
      >
        {splitedPrice[0]}
      </Typography>
      <div className={`col-md-4 ${style.centBox}`}>
        <Sticker stickerText={prop.offerMessage} />
        <Typography variant="h1" className={`${style.cents}`} size="md">
          {splitedPrice[1]}
        </Typography>
        <Typography className={`${style.period}`} variant="h1" size="md">
          /{prop.period || 'mo'}
        </Typography>
      </div>
    </div>
  );
}

BigPrice.propTypes = {};

export default memo(BigPrice);
