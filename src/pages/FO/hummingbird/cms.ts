import type {FoCmsPageInterface} from '@interfaces/FO/cms';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoCmsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/cms').foCmsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/cms').foCmsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
