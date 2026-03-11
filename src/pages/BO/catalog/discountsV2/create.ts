import {type BODiscountsCreatePageInterface} from '@interfaces/BO/catalog/discountsV2/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODiscountsCreatePageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/catalog/discountV2/create').boDiscountsCreatePage;
  }
  return require('@versions/develop/pages/BO/catalog/discountsV2/create').boDiscountsCreatePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
