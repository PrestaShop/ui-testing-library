import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/checkout').checkoutPage;
  }
  return require('@versions/develop/pages/FO/classic/checkout').checkoutPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
