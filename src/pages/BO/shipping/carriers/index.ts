import type {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCarriersPageInterface {
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/shipping/carriers');
  }
  return require('@versions/develop/pages/BO/shipping/carriers').boCarriersPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
