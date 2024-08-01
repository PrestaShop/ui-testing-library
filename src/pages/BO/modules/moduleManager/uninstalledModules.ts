import type {ModuleManagerUninstalledModulesPageInterface} from '@interfaces/BO/modules/moduleManager/uninstalledModules';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerUninstalledModulesPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/mock/pages/BO/modules/moduleManager/uninstalledModules');
  }
  return require('@versions/1.7.8/pages/BO/modules/moduleManager/uninstalledModules');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
