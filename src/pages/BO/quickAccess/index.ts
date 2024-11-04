import type {BOQuickAccessInterface} from '@interfaces/BO/quickAccess';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOQuickAccessInterface {
  return require('@versions/develop/pages/BO/quickAccess');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
