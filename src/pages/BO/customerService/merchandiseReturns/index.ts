import type {BOMerchandiseReturnsPageInterface} from '@interfaces/BO/customerService/merchandiseReturns';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMerchandiseReturnsPageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/customerService/merchandiseReturns').boMerchandiseReturnsPage;
  }
  return require('@versions/develop/pages/BO/customerService/merchandiseReturns').boMerchandiseReturnsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
