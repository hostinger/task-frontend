/*
 * CountdownTimer Messages
 *
 * This contains all the text for the CountdownTimer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CountdownTimer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CountdownTimer container!',
  },
});
