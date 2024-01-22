import type {ModuleManagerPageInterface} from '@interfaces/BO/modules/moduleManager';
import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '0.0.0';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/BO/modules/moduleManager').moduleManager;
  }
  return require('@versions/8.0.0/pages/BO/modules/moduleManager').moduleManager;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
