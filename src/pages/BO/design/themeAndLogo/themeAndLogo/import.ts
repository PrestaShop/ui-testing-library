import {type BOThemeAndLogoImportPageInterface} from '@interfaces/BO/design/themeAndLogo/themeAndLogo/import';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOThemeAndLogoImportPageInterface {
  return require('@versions/develop/pages/BO/themeAndLogo');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
