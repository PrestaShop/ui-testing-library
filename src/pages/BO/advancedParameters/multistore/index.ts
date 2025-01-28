import {type BOMultistorePageInterface} from '@interfaces/BO/advancedParameters/multistore';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMultistorePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/multistore');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
