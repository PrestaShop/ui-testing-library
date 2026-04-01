import type {FoAboutUsPageInterface} from '@interfaces/FO/aboutUs';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoAboutUsPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/aboutUs').default;
  }
  return require('@pages/FO/hummingbird/aboutUs').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
