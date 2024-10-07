import {type BOLanguagesCreatePageInterface} from '@interfaces/BO/international/languages/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOLanguagesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/languages/create');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
