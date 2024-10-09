import type {FoContactUsPageInterface} from '@interfaces/FO/contactUs';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoContactUsPageInterface {
  return require('@versions/develop/pages/FO/classic/contactUs').foContactUsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
