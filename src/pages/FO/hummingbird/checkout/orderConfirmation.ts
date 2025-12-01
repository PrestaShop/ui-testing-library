import type {FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutOrderConfirmationPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/checkout/orderConfirmation').foCheckoutOrderConfirmationPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/checkout/orderConfirmation').foCheckoutOrderConfirmationPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
