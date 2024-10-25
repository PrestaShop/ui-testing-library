import type {BOProductsCreateTabDescriptionPageInterface} from '@interfaces/BO/catalog/products/create/tabDescription';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabDescriptionPageInterface {
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/BO/catalog/products/create/tabDescription').descriptionTab;
  }
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create/tabDescription').descriptionTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabDescription').descriptionTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
