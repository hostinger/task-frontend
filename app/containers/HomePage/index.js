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

export default function HomePage() {
  const hardCode = {
    topText: 'New Year Offer',
    offerProcents: '82% OFF',
    WebHosting: 'Web Hosting',
    buttonText: 'Get started now',
  };
  return (
    <div className="row">
      <div className={`${style.offer} col-md-6`}>
        <Typography size="big" variant="h2">
          {hardCode.topText}
        </Typography>
        <Typography size="big" variant="h2">
          <span>{hardCode.offerProcents} </span>
          {hardCode.WebHosting}
        </Typography>
        <CountdownTimer initTimeMiliseconds="518400000" />
        <button>{hardCode.buttonText}</button>
      </div>
      <div className={`${style.HeaderContent} col-md-6`}>
        <BigPrice
          country="LT"
          offerMessage="Save 82%"
          period="mo"
          price={1.45}
        />
      </div>
    </div>
  );
}
