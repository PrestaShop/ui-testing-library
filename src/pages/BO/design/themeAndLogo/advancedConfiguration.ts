import {type BOThemeAvancedConfigurationPageInterface} from '@interfaces/BO/design/themeAndLogo/advancedConfiguration';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOThemeAvancedConfigurationPageInterface {
  return require('@versions/develop/pages/BO/design/themeAndLogo/advancedConfiguration');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
