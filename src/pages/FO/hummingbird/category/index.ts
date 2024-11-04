import type {FoCategoryPageInterface} from '@interfaces/FO/category';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoCategoryPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/category');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
