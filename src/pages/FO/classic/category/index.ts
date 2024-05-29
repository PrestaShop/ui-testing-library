import type {FoCategoryPageInterface} from '@interfaces/FO/category';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require */
function requirePage(): FoCategoryPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/category');
  }
  return require('@versions/develop/pages/FO/classic/category');
}
/* eslint-enable global-require */

export default requirePage();
