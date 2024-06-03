import type {BOProductsCreateTabDescriptionPageInterface} from '@interfaces/BO/catalog/products/create/tabDescription';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabDescriptionPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabDescription').descriptionTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
