import type {BOShippingPreferencesPageInterface} from '@interfaces/BO/shipping/preferences';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOShippingPreferencesPageInterface {
  return require('@versions/develop/pages/BO/shipping/preferences');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
