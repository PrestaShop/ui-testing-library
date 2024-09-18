import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/checkout');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
