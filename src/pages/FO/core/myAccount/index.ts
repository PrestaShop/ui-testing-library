import type {FoMyAccountPageInterface} from '@interfaces/FO/myAccount';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyAccountPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/myAccount').default;
  }
  return require('@pages/FO/hummingbird/myAccount').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
