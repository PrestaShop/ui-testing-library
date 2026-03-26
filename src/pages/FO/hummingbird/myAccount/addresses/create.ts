import {type FoMyAddressesCreatePageInterface} from '@interfaces/FO/myAccount/addresses/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyAddressesCreatePageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/addresses/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
