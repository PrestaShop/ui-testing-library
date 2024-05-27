import type {BOSeoTabPageInterface} from '@interfaces/BO/catalog/products/add/seoTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOSeoTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/add/seoTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/add/seoTab');
}
/* eslint-enable global-require */

export default requirePage();
