import type {FODeliveryPageInterface} from '@interfaces/FO/delivery';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FODeliveryPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/delivery');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
