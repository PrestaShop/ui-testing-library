import {type BOTaxRulesPageInterface} from '@interfaces/BO/international/taxes/taxRules';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTaxRulesPageInterface {
  return require('@versions/develop/pages/BO/international/taxes/taxRules');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
