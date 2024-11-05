import type {FoCartHummingbirdPageInterface} from '@interfaces/FO/cart';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCartHummingbirdPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/cart');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
