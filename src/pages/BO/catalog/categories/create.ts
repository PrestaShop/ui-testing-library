import {type BOCategoriesCreatePageInterface} from '@interfaces/BO/catalog/categories/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCategoriesCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/categories/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
