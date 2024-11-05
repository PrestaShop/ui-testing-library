import {type BOProductSettingsPageInterface} from '@interfaces/BO/shopParameters/productSettings';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductSettingsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/productSettings');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
