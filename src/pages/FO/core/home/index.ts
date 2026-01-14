import type {FoHomePageInterface} from '@interfaces/FO/home';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoHomePageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/home').default;
  }
  return require('@pages/FO/hummingbird/home').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
