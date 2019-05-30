/**
 *
 * Asynchronously loads the component for CountdownTimer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
