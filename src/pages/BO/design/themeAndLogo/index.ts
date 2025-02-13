import {type BOThemeAndLogoPageInterface} from '@interfaces/BO/design/themeAndLogo';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOThemeAndLogoPageInterface {
  return require('@versions/develop/pages/BO/design/themeAndLogo');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
