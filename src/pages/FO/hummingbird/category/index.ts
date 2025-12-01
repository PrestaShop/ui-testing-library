import type {FoCategoryHummingbirdPageInterface} from '@interfaces/FO/category';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoCategoryHummingbirdPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/category').foCategoryPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/category').foCategoryPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
