import {BOCMSPageCategoriesCreatePageInterface} from '@interfaces/BO/design/pages/category/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCMSPageCategoriesCreatePageInterface {
  return require('@versions/develop/pages/BO/design/pages/category/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
