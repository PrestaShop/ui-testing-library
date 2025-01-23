import type {FoMyMerchandiseReturnsPageInterface} from '@interfaces/FO/myAccount/merchandiseReturns';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyMerchandiseReturnsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/merchandiseReturns');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
