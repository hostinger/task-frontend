/**
 *
 * Asynchronously loads the component for Sticker
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
