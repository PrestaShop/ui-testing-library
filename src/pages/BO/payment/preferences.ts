import type {BOPaymentPreferencesPageInterface} from '@interfaces/BO/payment/preferences';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOPaymentPreferencesPageInterface {
  return require('@versions/develop/pages/BO/payment/preferences');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
