import type {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrdersCreatePageInterface {
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/BO/orders/create').boOrderCreatePage;
  }
  if (semver.lt(psVersion, '8.0.0')) {
    return require('@versions/1.7.8/pages/BO/orders/create').boOrderCreatePage;
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/orders/create').boOrderCreatePage;
  }
  return require('@versions/develop/pages/BO/orders/create');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
