import type {FOSecurePaymentPageInterface} from '@interfaces/FO/securePayment';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOSecurePaymentPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/securePayment');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
