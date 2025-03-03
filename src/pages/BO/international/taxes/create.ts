import {type BOTaxesCreatePageInterface} from '@interfaces/BO/international/taxes/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTaxesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/taxes/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
