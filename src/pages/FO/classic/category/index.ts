import type {FoCategoryPageInterface} from '@interfaces/FO/category';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): FoCategoryPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/category');
  }
  return require('@versions/develop/pages/FO/classic/category');
}
/* eslint-enable global-require */

export default requirePage();
