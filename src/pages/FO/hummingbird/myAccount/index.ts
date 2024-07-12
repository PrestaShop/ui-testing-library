import type {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';

/* eslint-disable global-require */
function requirePage(): FoMyAccountPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount');
}
/* eslint-enable global-require */

export default requirePage();
