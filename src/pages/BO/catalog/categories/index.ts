import {type BOCategoriesPageInterface} from '@interfaces/BO/catalog/categories';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCategoriesPageInterface {
  return require('@versions/develop/pages/BO/catalog/categories');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
