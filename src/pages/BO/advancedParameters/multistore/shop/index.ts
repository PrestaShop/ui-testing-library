import {type BOMultistoreShopPageInterface} from '@interfaces/BO/advancedParameters/multistore/shop';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMultistoreShopPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/multistore/shop');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
