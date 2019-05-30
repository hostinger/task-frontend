/**
 *
 * Asynchronously loads the component for Menus
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
