import type {BOQuickAccessInterface} from '@interfaces/BO/quickAccess';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOQuickAccessInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/quickAccess').boQuickAccessPage;
  }
  return require('@versions/develop/pages/BO/quickAccess').boQuickAccessPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
