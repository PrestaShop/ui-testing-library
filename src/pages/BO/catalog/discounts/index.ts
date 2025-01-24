import {type BOCartRulesPageInterface} from '@interfaces/BO/catalog/discounts';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCartRulesPageInterface {
  return require('@versions/develop/pages/BO/catalog/discounts');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
