import type {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoMyAccountPageInterface {
  return require('@versions/classic/pages/FO/hummingbird/myAccount').myAccountPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
