import type {ModuleManagerPageInterface} from '@interfaces/BO/modules/moduleManager';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/modules/moduleManager').moduleManager;
  }
  return require('@versions/develop/pages/BO/modules/moduleManager').moduleManager;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
