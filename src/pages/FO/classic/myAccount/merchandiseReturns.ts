import type {FoMyMerchandiseReturnsPageInterface} from '@interfaces/FO/myAccount/merchandiseReturns';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyMerchandiseReturnsPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/merchandiseReturns').myMerchandiseReturnsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
