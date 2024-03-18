import type {FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutOrderConfirmationPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/checkout/orderConfirmation').orderConfirmationPage;
  }
  return require('@versions/develop/pages/FO/classic/checkout/orderConfirmation').orderConfirmationPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
