import type {FoLoginPageInterface} from '@interfaces/FO/login';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoLoginPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/login').default;
  }
  return require('@pages/FO/hummingbird/login').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
