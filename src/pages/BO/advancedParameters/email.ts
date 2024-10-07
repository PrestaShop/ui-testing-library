import {type BOEmailPageInterface} from '@interfaces/BO/advancedParameters/email';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOEmailPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/email');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
