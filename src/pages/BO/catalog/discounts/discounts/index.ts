import {type BODiscountsPageInterface} from '@interfaces/BO/catalog/discounts/discounts';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODiscountsPageInterface {
  return require('@versions/develop/pages/BO/catalog/discounts/discounts');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
