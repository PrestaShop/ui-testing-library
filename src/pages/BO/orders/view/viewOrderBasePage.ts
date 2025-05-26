import type {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();
/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOViewOrderBasePageInterface {
  if (semver.lt(psVersion, '7.3.0')) {
    return require('@versions/1.7.2/pages/BO/orders/view/viewOrderBasePage').viewOrderBasePage;
  }
  if (semver.lt(psVersion, '7.7.0')) {
    return require('@versions/1.7.6/pages/BO/orders/view/viewOrderBasePage').viewOrderBasePage;
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/orders/view/viewOrderBasePage').viewOrderBasePage;
  }
  return require('@versions/develop/pages/BO/orders/view/viewOrderBasePage').viewOrderBasePage;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
