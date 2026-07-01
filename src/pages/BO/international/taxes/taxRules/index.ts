import {type BOTaxRulesPageInterface} from '@interfaces/BO/international/taxes/taxRules';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTaxRulesPageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/international/taxes/taxRules').boTaxRulesPage;
  }
  return require('@versions/develop/pages/BO/international/taxes/taxRules').boTaxRulesPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
