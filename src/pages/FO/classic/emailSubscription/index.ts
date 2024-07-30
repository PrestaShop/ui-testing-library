import {type FoEmailSubscriptionPageInterface} from '@interfaces/FO/emailSubscription';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoEmailSubscriptionPageInterface {
  return require('@versions/develop/pages/FO/emailSubscription');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
