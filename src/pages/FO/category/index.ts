import type {FoCategoryPageInterface} from '@interfaces/FO/category';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): FoCategoryPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/FO/category');
  }
  return require('@versions/8.0.0/pages/FO/category');
}
/* eslint-enable global-require */

export default requirePage();
