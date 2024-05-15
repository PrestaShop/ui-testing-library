import type {BODesignPositionsHookModulePageInterface} from '@interfaces/BO/design/positions/hookModule';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BODesignPositionsHookModulePageInterface {
  return require('@versions/develop/pages/BO/design/positions/hookModule');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
