import type {FoProductHummingbirdPageInterface} from '@interfaces/FO/product';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoProductHummingbirdPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/product');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
