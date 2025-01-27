import {type BOTaxRulesCreatePageInterface} from '@interfaces/BO/international/taxes/taxRules/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTaxRulesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/taxes/taxRules/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
