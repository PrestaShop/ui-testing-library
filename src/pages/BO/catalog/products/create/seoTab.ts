import type {BOSeoTabPageInterface} from '@interfaces/BO/catalog/products/create/seoTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOSeoTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/seoTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/seoTab');
}
/* eslint-enable global-require */

export default requirePage();
