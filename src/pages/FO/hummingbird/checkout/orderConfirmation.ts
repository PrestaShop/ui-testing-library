import {type FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutOrderConfirmationPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/checkout/orderConfirmation');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
