import type {FoHomeHummingbirdPageInterface} from '@interfaces/FO/home';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoHomeHummingbirdPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/home');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
