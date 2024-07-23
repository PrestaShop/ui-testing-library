import {type BOThemeAndLogoPageInterface} from '@interfaces/BO/design/themeAndLogo';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOThemeAndLogoPageInterface {
  return require('@versions/develop/pages/BO/themeAndLogo');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
