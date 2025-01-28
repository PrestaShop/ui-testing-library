import {type BOCatalogPriceRulesPageInterface} from '@interfaces/BO/catalog/discounts/catalogPriceRules';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCatalogPriceRulesPageInterface {
  return require('@versions/develop/pages/BO/catalog/discounts/catalogPriceRules');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
