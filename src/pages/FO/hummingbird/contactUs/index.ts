import type {FoContactUsPageInterface} from '@interfaces/FO/contactUs';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoContactUsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/contactUs').foContactUsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/contactUs').foContactUsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
