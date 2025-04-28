import type {BOCarriersCreatePageInterface} from '@interfaces/BO/shipping/carriers/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCarriersCreatePageInterface {
  if (semver.lt(psVersion, '7.0.0')) {
    return require('@versions/1.6.1/pages/BO/shipping/carriers/create').boCarriersCreatePage;
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/shipping/carriers/create').boCarriersCreatePage;
  }
  return require('@versions/develop/pages/BO/shipping/carriers/create').boCarriersCreatePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
