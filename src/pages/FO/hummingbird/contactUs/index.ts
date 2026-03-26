import type {FoContactUsPageInterface} from '@interfaces/FO/contactUs';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoContactUsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/contactUs');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
