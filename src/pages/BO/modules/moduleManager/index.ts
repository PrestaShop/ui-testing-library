import type {ModuleManagerPageInterface} from '@interfaces/BO/modules/moduleManager';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerPageInterface {
  return require('@versions/develop/pages/BO/modules/moduleManager').moduleManagerPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
