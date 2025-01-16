import type {BODeliverySlipsPageInterface} from '@interfaces/BO/orders/deliverySlips';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODeliverySlipsPageInterface {
  return require('@versions/develop/pages/BO/orders/deliverySlips');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
