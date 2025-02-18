import type {FoCreateAccountPageInterface} from '@interfaces/FO/myAccount/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCreateAccountPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/create').foCreateAccountPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
