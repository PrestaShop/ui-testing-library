import type {FoCategoryPageInterface} from '@interfaces/FO/category';

/* eslint-disable global-require */
function requirePage(): FoCategoryPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/category');
}
/* eslint-enable global-require */

export default requirePage();
