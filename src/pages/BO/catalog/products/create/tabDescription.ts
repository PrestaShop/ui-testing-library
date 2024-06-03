import type {BOProductsCreateTabDescriptionPageInterface} from '@interfaces/BO/catalog/products/create/tabDescription';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabDescriptionPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabDescription').descriptionTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabDescription').descriptionTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
