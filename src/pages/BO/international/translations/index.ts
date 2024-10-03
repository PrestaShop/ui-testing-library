import {type BOTranslationsPageInterface} from '@interfaces/BO/international/translations';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOTranslationsPageInterface {
  return require('@versions/develop/pages/BO/international/translations');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
