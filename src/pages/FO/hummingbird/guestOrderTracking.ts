import type {FOGuestOrderTrackingPageInterface} from '@interfaces/FO/guestOrderTracking';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOGuestOrderTrackingPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/guestOrderTracking');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
