import type {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCarriersPageInterface {
  if (semver.lt(psVersion, '7.0.0')) {
    return require('@versions/1.6.1/pages/BO/shipping/carriers').boCarriersPage;
  }
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/BO/shipping/carriers').boCarriersPage;
  }
  if (semver.lt(psVersion, '8.0.0')) {
    return require('@versions/1.7.8/pages/BO/shipping/carriers').boCarriersPage;
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/shipping/carriers').boCarriersPage;
  }
  return require('@versions/develop/pages/BO/shipping/carriers').boCarriersPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();