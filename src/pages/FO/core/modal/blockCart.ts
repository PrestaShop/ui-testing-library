import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoModalBlockCartPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/modal/blockCart').default;
  }
  return require('@pages/FO/hummingbird/modal/blockCart').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
