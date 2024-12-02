import type {BOModuleManagerUpdatesPageInterface} from '@interfaces/BO/modules/moduleManager/updates';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOModuleManagerUpdatesPageInterface {
  return require('@versions/develop/pages/BO/modules/moduleManager/updates');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
