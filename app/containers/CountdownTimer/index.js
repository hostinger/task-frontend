/**
 *
 * CountdownTimer
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCountdownTimer from './selectors';
import reducer from './reducer';
import saga from './saga';
import TimeHolder from '../../components/DataDisplay/TimerHolder/Loadable';

export function CountdownTimer(prop) {
  useInjectReducer({ key: 'countdownTimer', reducer });
  useInjectSaga({ key: 'countdownTimer', saga });

  const [timerTime, setDate] = useState(prop.initTimeMiliseconds);

  useEffect(() => {
    const timerID = setInterval(() => {
      if (timerTime <= 0) {
        clearInterval(timerID);
      } else {
        tick();
      }
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(timerTime - 1000);
  }
  const timer = [
    {
      label: 'Days',
      value: `0${Math.floor(timerTime / 86400000)}`.slice(-2),
    },
    {
      label: 'Hours',
      value: `0${Math.floor(timerTime / 3600000) % 60}`.slice(-2),
    },
    {
      label: 'Minutes',
      value: `0${Math.floor(timerTime / 60000) % 60}`.slice(-2),
    },
    {
      label: 'Seconds',
      value: `0${Math.floor(timerTime / 1000) % 60}`.slice(-2),
    },
  ];

  return (
    <div className="new-timer ">
      <div className="new-timer__triangle-left" />
      <div className="new-timer__holder ">
        {timer.map((time, index) => (
          <TimeHolder
            key={index.toString()}
            time={time.value}
            helperText={time.label}
          />
        ))}
      </div>
      <div className="new-timer__triangle-right" />
    </div>
  );
}

CountdownTimer.propTypes = {};

const mapStateToProps = createStructuredSelector({
  countdownTimer: makeSelectCountdownTimer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CountdownTimer);
