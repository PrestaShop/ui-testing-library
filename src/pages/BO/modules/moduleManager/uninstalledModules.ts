import type {ModuleManagerUninstalledModulesPageInterface} from '@interfaces/BO/modules/moduleManager/uninstalledModules';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerUninstalledModulesPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    throw new Error('No tab "Uninstalled Modules" in version >= 8.0');
  }
  return require('@versions/1.7.8/pages/BO/modules/moduleManager/uninstalledModules');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
