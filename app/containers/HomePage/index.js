/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import style from './style.scss';
import BigPrice from '../../components/DataDisplay/BigPrice/Loadable';
import CountdownTimer from '../CountdownTimer/Loadable';
import Typography from '../../components/DataDisplay/Typography/Loadable';
import Icon from '../../components/DataDisplay/Icon/Loadable';

export default function HomePage() {
  const hardCode = {
    topText: 'New Year Offer',
    offerProcents: '82% OFF',
    WebHosting: 'Web Hosting',
    buttonText: 'Get started now',
  };
  const bigPrice = {
    country: 'US', // NOTE: Awalible only: $ (US, CA), EUR(EU, LT, DE), Zlot(PL)
    offerMessage: 'Save 82%',
    period: 'mo',
    price: 1.45,
  };
  const extraText = [
    'Guaranteed 99.9% Uptime',
    'Superior Speed Performance',
    '24/7 Support Chat',
    '30-Day Money-Back Guorantee',
  ];
  const width = window.innerWidth <= 1024;
  return (
    <div className="row">
      {width && (
        <div className={`${style.HeaderContent} col-md-6`}>
          <BigPrice {...bigPrice} />
        </div>
      )}
      <div className={`${style.offer} col-md-6`}>
        <Typography size="big" variant="h2">
          {hardCode.topText}
        </Typography>
        <Typography size="big" variant="h2">
          <span>{hardCode.offerProcents} </span>
          {hardCode.WebHosting}
        </Typography>
        <CountdownTimer initTimeMiliseconds="518400000" />
        <div
          className={`h-button-wrapper d-md-flex m-md-0 m-auto ${
            style.top_button
          }`}
        >
          <a
            className="h-button h-button--red mw-280 mw-340-sm pt-15 pb-15 button scrollTo align-items m-box-shadow ripple-red"
            id="hgr-affiliates_page-header-button-get_the_limited_deal"
            href="#pricing"
          >
            {hardCode.buttonText}
          </a>
        </div>
      </div>
      {!width && (
        <div className={`${style.HeaderContent} col-md-6`}>
          <BigPrice {...bigPrice} />
        </div>
      )}
      <div>
        {extraText.map((text, index) => (
          <Typography key={index.toString()} size="sm" variant="span">
            <Icon />
            {text}
          </Typography>
        ))}
      </div>
    </div>
  );
}
