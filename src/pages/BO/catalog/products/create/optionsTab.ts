import type {BOOptionsTabPageInterface} from '@interfaces/BO/catalog/products/create/optionsTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOOptionsTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/optionsTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/optionsTab');
}
/* eslint-enable global-require */

export default requirePage();
