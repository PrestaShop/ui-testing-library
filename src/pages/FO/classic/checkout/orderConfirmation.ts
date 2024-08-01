import type {FoCheckoutOrderConfirmationPageInterface} from '@interfaces/FO/checkout/orderConfirmation';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutOrderConfirmationPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/develop/pages/FO/classic/checkout/orderConfirmation').orderConfirmationPage;
  }
  return require('@versions/1.7.8/pages/FO/classic/checkout/orderConfirmation');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
