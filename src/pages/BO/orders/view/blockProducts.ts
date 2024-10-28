import {type BOProductBlockProductsPageInterface} from '@interfaces/BO/orders/view/blockProducts';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductBlockProductsPageInterface {
  if (semver.lt(psVersion, '7.7.0')) {
    return require('@versions/1.7.6/pages/BO/orders/view/blockProducts').productsBlockOrdersPage;
  }
  return require('@versions/develop/pages/BO/orders/view/blockProducts').productsBlockOrdersPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
