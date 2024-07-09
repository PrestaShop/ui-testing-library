import type {BOPaymentMethodsPageInterface} from '@interfaces/BO/payment/paymentMethods';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOPaymentMethodsPageInterface {
  return require('@versions/develop/pages/BO/payment/paymentMethods');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
