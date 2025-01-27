import {type BOTaxesPageInterface} from '@interfaces/BO/international/taxes';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTaxesPageInterface {
  return require('@versions/develop/pages/BO/international/taxes');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
