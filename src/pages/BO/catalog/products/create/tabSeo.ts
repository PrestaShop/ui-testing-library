import type {BOProductsCreateTabSeoPageInterface} from '@interfaces/BO/catalog/products/create/tabSeo';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabSeoPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabSeo').seoTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabSeo').seoTab;
}
/* eslint-disable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
