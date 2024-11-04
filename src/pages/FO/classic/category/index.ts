import type {FoCategoryPageInterface} from '@interfaces/FO/category';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCategoryPageInterface {
  return require('@versions/develop/pages/FO/classic/category').categoryPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
