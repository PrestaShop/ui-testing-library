import type {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoMyAccountPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount').myAccountPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
