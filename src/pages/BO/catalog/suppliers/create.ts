import type {BOSuppliersCreatePageInterface} from '@interfaces/BO/catalog/suppliers/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOSuppliersCreatePageInterface {
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.1.0/pages/BO/catalog/suppliers/create').createSupplier;
  }
  return require('@versions/develop/pages/BO/catalog/suppliers/create').createSupplier;
}

/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
