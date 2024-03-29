import type {ModuleManagerPageInterface} from '@interfaces/BO/modules/moduleManager';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerPageInterface {
  if (semver.lt(psVersion, '1.7.5')) {
    return require('@versions/1.7.4/pages/BO/modules/moduleManager');
  }
  return require('@versions/develop/pages/BO/modules/moduleManager').moduleManagerPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
