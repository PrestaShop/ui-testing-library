import {type BOLocalizationPageInterface} from '@interfaces/BO/international/localization';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOLocalizationPageInterface {
  return require('@versions/develop/pages/BO/international/localization');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
