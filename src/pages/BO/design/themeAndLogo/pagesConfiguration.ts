import {type BOPagesConfigurationPageInterface} from '@interfaces/BO/design/themeAndLogo/pagesConfiguration';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOPagesConfigurationPageInterface {
  return require('@versions/develop/pages/BO/design/themeAndLogo/pagesConfiguration');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
