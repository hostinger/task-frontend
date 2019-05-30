import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the countdownTimer state domain
 */

const selectCountdownTimerDomain = state =>
  state.countdownTimer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CountdownTimer
 */

const makeSelectCountdownTimer = () =>
  createSelector(
    selectCountdownTimerDomain,
    substate => substate,
  );

export default makeSelectCountdownTimer;
export { selectCountdownTimerDomain };
