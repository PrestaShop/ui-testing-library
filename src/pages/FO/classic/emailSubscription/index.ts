import {type FoEmailSubscriptionPageInterface} from '@interfaces/FO/emailSubscription';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoEmailSubscriptionPageInterface {
  return require('@versions/develop/pages/FO/classic/emailSubscription');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
