import type {FOMyReturnDetailsPageInterface} from '@interfaces/FO/myAccount/returnDetails';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOMyReturnDetailsPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/returnDetails').foMyReturnDetailsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
