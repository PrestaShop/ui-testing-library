import {type BOMultistoreShopUrlPageInterface} from '@interfaces/BO/advancedParameters/multistore/url';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMultistoreShopUrlPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/multistore/url');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
