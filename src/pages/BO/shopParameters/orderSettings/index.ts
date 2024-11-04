import type {BOOrderSettingsPageInterface} from '@interfaces/BO/shopParameters/orderSettings';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrderSettingsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/orderSettings');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
