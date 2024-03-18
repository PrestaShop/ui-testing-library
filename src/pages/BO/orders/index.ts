import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOOrdersPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/orders');
  }
  return require('@versions/develop/pages/BO/orders');
}
/* eslint-enable global-require */

export default requirePage();
