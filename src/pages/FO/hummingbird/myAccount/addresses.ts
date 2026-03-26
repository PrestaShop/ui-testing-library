import {type FoMyAddressesPageInterface} from '@interfaces/FO/myAccount/addresses';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyAddressesPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/addresses');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
