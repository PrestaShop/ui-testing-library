import type {FoProductPageInterface} from '@interfaces/FO/product';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoProductPageInterface {
  return require('@versions/develop/pages/FO/classic/product').productPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
