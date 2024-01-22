import type {FoHomePageInterface} from '@interfaces/FO/home';
import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '0.0.0';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoHomePageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/FO/home').homePage;
  }
  return require('@versions/8.0.0/pages/FO/home').homePage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
