import type {BOMerchandiseReturnsEditPageInterface} from '@interfaces/BO/customerService/merchandiseReturns/edit';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMerchandiseReturnsEditPageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/customerService/merchandiseReturns/edit').boMerchandiseReturnsEditPage;
  }
  return require('@versions/develop/pages/BO/customerService/merchandiseReturns/edit').boMerchandiseReturnsEditPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
