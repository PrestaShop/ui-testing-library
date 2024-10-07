import {type BOLanguagesPageInterface} from '@interfaces/BO/international/languages';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOLanguagesPageInterface {
  return require('@versions/develop/pages/BO/international/languages');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
