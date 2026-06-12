import type {BODesignPositionsHookModulePageInterface} from '@interfaces/BO/design/positions/hookModule';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODesignPositionsHookModulePageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/design/positions/hookModule').hookModulePage;
  }
  return require('@versions/develop/pages/BO/design/positions/hookModule').hookModulePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
