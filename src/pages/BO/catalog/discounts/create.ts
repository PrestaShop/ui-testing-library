import {type BOCartRulesCreatePageInterface} from '@interfaces/BO/catalog/discounts/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCartRulesCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/discounts/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
